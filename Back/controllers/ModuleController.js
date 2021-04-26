const { Module } = require('../models/ModuleModel');

exports.getAllModules = async(req, res, next) => {
    const fetch = await Module.find();
    res.json(fetch);
}

exports.createModule = async(req, res, next) => {
    const data = await req.body
    const newModule = await new Module(data);
    const result = await newModule.save();
    res.json(result);
}