const Formation = require('../models/FormationModel');
const Module = require('../models/ModuleModel');
const Composant = require('../models/ComposantModel');

exports.getAllFormations = async(req, res, next) => {
  const fetch = await Formation.find().populate('modules').exec();
  res.json(fetch);
}

exports.create = async(req, res, next) => {
  const data = await req.body;
  const insert = await new Formation(data);
  const result = await insert.save();
  res.json(result);
}

exports.createWithBigObject = async(req, res, next) => {
  // Get the body
  const data = req.body;

  const modules = []

  for(mod of data.modules){
    let creation = { titre: mod.titre };
    const insertComp = await Composant.insertMany(mod.composants);
    let composantsIds = insertComp.map( comp => comp._id);
    creation.composants = composantsIds;
    modules.push(creation);
  }

  // Cette méthode ne push pas dans modules à cause du async await...
  // data.modules.forEach( async mod => {
  //   let creation = { titre: mod.titre };
  //   const insertComp = await Composant.insertMany(mod.composants);
  //   let composantsIds = insertComp.map( comp => comp._id);
  //   creation.composants = composantsIds;
  //   modules.push(creation);
  // });

  const insertModules = await Module.insertMany(modules);
  let modulesIds = insertModules.map( mod => mod._id);
  // console.log(modulesIds);

  data.modules = modulesIds;

  const newFormation = new Formation(data);
  const insertFormation = newFormation.save();

  //console.log(modules);
  //data.modules = modules;
  res.send(insertFormation);
  //console.log(data.modules);

  
}
