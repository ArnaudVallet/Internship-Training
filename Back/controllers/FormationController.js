const Formation = require('../models/FormationModel');
const Module = require('../models/ModuleModel');
const Composant = require('../models/ComposantModel');
// Custom Error class wich takes (message, statusCode) as parameters.
const ErrorResponse = require('../utils/errorResponse');

exports.getAllFormations = async(req, res, next) => {
  try {
    const fetchedFormations = await Formation.find();
    res.status(200).json({
      success: true,
      formations: fetchedFormations
    });
  } catch (error) {
    next(error)
  };
};

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

exports.getOneById = async(req, res, next) => {
  try {
    const _id = req.params.id;
    const findFormation = await Formation.findById(_id);
    if(!findFormation){
      return next(new ErrorResponse("Aucune formation trouvée.", 400))
    }
    res.status(200).json({
      success: true,
      formation: findFormation
    })
  } catch (error) {
    next(error);
  };
};

exports.getOneByIdWithPopulate = async(req, res, next) => {
  const _id = req.params.id;
  const findFormation = await Formation.findById(_id)
    .populate({path: 'modules', model: Module, populate: {path: 'composants', model: Composant}})
  .exec( (err, docs) => {
    err ? next(err) : res.status(200).json({
      success: true,
      formation: docs
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

exports.uploadImage = async(req, res, next) => {
  const file = req.file;
  res.status(200).json({
    success: true,
    filename: file.filename,
    url: file.path
  })
};

exports.create = async(req, res, next) => {
  
  try {
    const file = req.file;
    const data = JSON.parse(req.body.data);

    // Create a new Formation instance
    const newFormation = await new Formation(data);
    // Change backslashes from path to forwardslashes
    file.path = file.path.replace(/\\/g, "/");
    // Change Formation image property
    newFormation.image = {
      path: file.path,
      filename: file.filename
    };
    // Save it to DB
    const result = await newFormation.save();
    console.log(result);

    // console.log('dirname : ', __dirname);
    console.log('appRoot', appRoot);

    res.status(201)
      // .sendFile(appRoot + '/' + file.path) // used to send image
      .json({
        success: true,
        formation: result,
    });

  } catch (error) {
    next(error);
  };
};

exports.createWithBigObject = async(req, res, next) => {
  
  try {
    const file = req.file;
    const formation = JSON.parse(req.body.data);
    // Get the body
            //const formation = req.body;
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
    // Change backslashes from path to forwardslashes
    file.path = file.path.replace(/\\/g, "/");
    // Add image to the formation
    formation.image = {
      path: file.path,
      filename: file.filename
    };
    // Create the formation object and save it
    const newFormation = await new Formation(formation).save();
    res.status(201).json({
      success: true,
      formation: newFormation
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteFormation = async(req, res, next) => {
  
  try {
    const _id = req.params.id;
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
  const _id = await req.params.id;
  try {
    //const myUpdate = await Formation.findOneAndUpdate({_id}, {published: !this.published});
    const form = await Formation.findById(_id);
    await form.updateOne({published: !form.published}, {new: true});
    // As updateOne does not return the updated document...
    form.published = !form.published; // ... this is for response visibility
    res.status(200).json({
      success: true,
      message: 'Formation correctement mise à jour.',
      formation: form
    });
  } catch (error) {
    next(error)
  }
}

exports.addOneModule = async(req, res, next) => {
  
  try {
    const { formation_id, module_id } = req.params;

    // Check for formation
    const checkFormation = await Formation.findById(formation_id);
    if(!checkFormation){
      return next(new ErrorResponse("Aucune formation trouvée correspondante.", 400));
    }
    // Check for module
    const checkModule = await Module.findById(module_id);
    if(!checkModule){
      return next(new ErrorResponse("Aucun module trouvé, impossible à ajouter à la formation."));
    }
    // Add module to formation
    await checkFormation.addModule(module_id);
    // Renvoie de la réponse contenant la formation modifiée
    res.send(checkFormation);
  } catch (error) {
    next(error);
  }
}
