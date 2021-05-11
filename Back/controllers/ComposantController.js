const Composant = require('../models/ComposantModel');
const Formation = require('../models/FormationModel');
const Module = require('../models/ModuleModel');
// Custom Error class wich takes (message, statusCode) as parameters.
const ErrorResponse = require('../utils/errorResponse');

exports.testAggregation = async(req, res, next) => {
  const test = await Composant.aggregate([
    {$match: {}}
  ]);
  res.send(test)
}

exports.getAllComposants = async(req, res, next) => {
  const fetch = await Composant.find();
  res.json(fetch);
}

exports.createComposant = async(req, res, next) => {
  const data = await req.body
  const newComposant = await new Composant(data);
  const result = await newComposant.save();
  res.status(201).json({
    success: true,
    composant: result
  });
}

exports.createModuleComposant = async(req, res, next) => {
  try {
    const module_id = req.params.id; // Id du module
    const data = req.body; // La data du composant envoyé
    // Trouver le module passé en paramètre
    const targetModule = await Module.findById(module_id);
    // Erreur si formation non trouvée
    if(!targetModule){
      return next(new ErrorResponse('Aucun module correspondant trouvé', 400));
    };
    // Création du composant
    const newComposant = await new Composant(data).save();
    // Insertion de son Id dans la liste des composants du module trouvé
    await targetModule.addComposant(newComposant._id);
    res.status(200).json({
      success: true,
      targetModule
    });
  } catch (error) {
    next(error)
  }
}

