const Formation = require('../models/FormationModel');
const Module = require('../models/ModuleModel');
const Composant = require('../models/ComposantModel');
// Custom Error class wich takes (message, statusCode) as parameters.
const ErrorResponse = require('../utils/errorResponse');

exports.getAllModules = async(req, res, next) => {
  try {
    const fetch = await Module.find();
    res.status(200).json(fetch);
  } catch (error) {
    next(error) 
  }
}

exports.getOneById = async(req, res, next) => {
  try {
    const _id = req.params.id;
    const findModule = await Module.findById(_id);
    if(!findModule){
      return next(new ErrorResponse("Aucun module trouvé.", 400))
    }
    res.status(200).json(
      findModule
    )
  } catch (error) {
    next(error);
  };
};

exports.createModule = async(req, res, next) => {
  const data = await req.body
  const newModule = await new Module(data);
  const result = await newModule.save();
  res.status(201).json(result);
}

exports.createFormationModule = async(req, res, next) => {
  
  try {
    const formation_id = req.params.id; // Id de la formation
    const data = req.body; // La data du module envoyé
    // Trouver la formation passée en paramètres
    const targetFormation = await Formation.findOne({_id: formation_id});
    // Erreur si formation non trouvée
    if(!targetFormation){
      return next(new ErrorResponse('Aucune formation correspondante trouvée', 400));
    };
    // Création du module
    const newModule = await new Module(data).save();
    // Insertion de son Id dans la liste des modules de la Formation trouvée
    await targetFormation.addModule(newModule._id);
    res.send(targetFormation)
  } catch (error) {
    next(error)
  }
}

exports.addOneExistingComposant = async(req, res, next) => {
  try {
    const { module_id, composant_id } = req.params;

    // Check for module
    const checkModule = await Module.findById(module_id);
    if(!checkModule){
      return next(new ErrorResponse("Aucun module trouvé correspondant.", 400));
    }
    // Check for composant
    const checkComposant = await Composant.findById(composant_id);
    if(!checkComposant){
      return next(new ErrorResponse("Aucun composant trouvé, impossible à ajouter au module."));
    }
    // Add composant to module
    await checkModule.addComposant(composant_id);
    // Renvoie de la réponse contenant le module modifié
    res.send(checkModule);
  } catch (error) {
    next(error);
  }
}