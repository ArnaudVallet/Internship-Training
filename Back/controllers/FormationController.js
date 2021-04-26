const Formations = require('../models/FormationModel');

exports.getAllFormations = async(req, res, next) => {
    const fetch = await Formations.find().populate('modules').exec();
    res.json(fetch);
}

exports.create = async(req, res, next) => {
    const data = await req.body;
    const insert = await new Formations(data);
    const result = await insert.save();
    res.json(result);
}