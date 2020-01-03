var model = require("../models");

module.exports = {
  create(req, res) {
    return model.converstionRateModels
      .create({
        sourceQty: req.body.sourceQty,
        targetQty: req.body.targetQty,
        converstionRate: req.body.converstionRate
      })
      .then(converstionRateResult =>
        res.status(201).send(converstionRateResult)
      )
      .catch(error => res.status(400).send(error));
  },
  getAll(res) {
    return model.converstionRateModels
      .findAll()
      .then(converstionRateResult =>
        res.status(201).send(converstionRateResult)
      )
      .catch(error => res.status(400).send(error));
  },
  findBySource(req, res) {
    return model.converstionRateModels
      .findOne({ where: { sourceQty: req.params.sourceQty } })
      .then(converstionRateResult =>
        res.status(201).send(converstionRateResult)
      )
      .catch(error => res.status(400).send(error));
  }
};
