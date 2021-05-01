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

  for(mod of data.modules){
    
  }

  const modules = []

  // Cette méthode ne push pas dans modules à cause du async await...
  data.modules.forEach( async mod => {
    let creation = { titre: mod.titre };
    const insertComp = await Composant.insertMany(mod.composants);
    let composantsIds = insertComp.map( comp => comp._id);
    creation.composants = composantsIds;
    modules.push(creation);
  });

  console.log(modules);

  // let pipi = [];
  
  // allComposants.forEach( async comp => {
  //   const popo = await Composant.insertMany(comp);
  //   console.log(popo);
  //   pipi.push
  // });
  
  // const test = await allComposants.map( async comp => await Composant.insertMany(comp))
  // console.log(test);
}

// const myCallback = async (item) => {
//   const blabla = await Composant.insertMany(item.composants);
//   return blabla
// }
