const Composant = require('../models/ComposantModel');

exports.testAggregation = async(req, res, next) => {
  const test = await Composant.aggregate([
    {$match: {}}
  ]);
  res.send(test)
}

