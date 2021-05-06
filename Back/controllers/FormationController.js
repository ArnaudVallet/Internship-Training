const Formation = require('../models/FormationModel');
const Module = require('../models/ModuleModel');
const Composant = require('../models/ComposantModel');
// Custom Error class wich takes (message, statusCode) as parameters.
const ErrorResponse = require('../utils/errorResponse');

exports.getAllFormationsWithPopulate = async(req, res, next) => {
  await Formation.find()
    .populate({path: 'modules', model: Module, populate: {path: 'composants', model: Composant}})
  .exec( (err, docs) => {
    err ? next(err) : res.status(200).json({
      success: true,
      formations: docs
    });
  });
};

exports.getPublishedFormations = async(req, res, next) => {
  await Formation.find( { published: true } )
    .populate({path: 'modules', model: Module, populate: {path: 'composants', model: Composant}})
  .exec( (err, docs) => {
    err ? next(err) : res.status(200).json({
      success: true,
      formations: docs
    });
  });
};

// Pas ouf...
exports.getAllFormationsWithAggregate = async(req, res, next) => {
  await Formation.aggregate([
    { $lookup: {
        from: 'modules',
        localField: 'modules',
        foreignField: '_id',
        as: 'modules'
      }
    }, {
      $lookup: {
        from: 'composants',
        localField: 'modules.composants',
        foreignField: '_id',
        as: 'composants'
      }
    }
  ]).exec( (err, docs) => {
    err ? next(err) : res.status(200).json({
      success: true,
      formations: docs
    })
  });
};

exports.create = async(req, res, next) => {
  const { image, body: { name } } = req;
  console.log(req.image);
  res.send(image)
};

exports.createWithBigObject = async(req, res, next) => {
  
  try {
    // Get the body
    const formation = req.body;
    // Define modules[] where we'll store each modules with modules.composants[...ids]
    const modules = []
    // Loop modules, save their composants[] and map the result to get an composants = [...ids]
    for(mod of formation.modules){
      let creation = { titre: mod.titre };
      const insertComp = await Composant.insertMany(mod.composants);
      let composantsIds = insertComp.map( comp => comp._id);
      creation.composants = composantsIds;
      modules.push(creation);
    }
    // Insert the modules updated with modules.composants[...ids]
    const insertModules = await Module.insertMany(modules);
    // Map the result to only get an modules = [...ids]
    let modulesIds = insertModules.map( mod => mod._id);
    // Change formation.modules to our modules[...ids]
    formation.modules = modulesIds;
    // Create the formation object and save it
    const newFormation = await new Formation(formation).save();
    res.send(newFormation);
  } catch (error) {
    next(error);
  }
};

exports.deleteFormation = async(req, res, next) => {
  const _id = req.params.id;

  try {
    const myDelete = await Formation.findOneAndDelete({_id});
    console.log(myDelete);
    myDelete ? res.status(200).json({
      success: true,
      deleted: myDelete.titre
    }) : next(new ErrorResponse('Problème survenu lors de la requête', 500));
  } catch (error) {
    next(error);
  }
};

exports.setPublished = async(req, res, next) => {
  const _id = await req.body._id;
  try {
    //const myUpdate = await Formation.findOneAndUpdate({_id}, {published: !this.published});
    const form = await Formation.findOne({ _id });
    await form.updateOne({published: !form.published}, {new: true});
    // As updateOne does not return the updated document...
    form.published = !form.published; // ... this is for response visibility
    res.status(200).json({
      success: true,
      message: 'Formation correctement mise à jour.',
      form
    });
  } catch (error) {
    next(error)
  }
}
