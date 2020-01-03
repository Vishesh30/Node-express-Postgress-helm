var controller = require("../controllers/index");

module.exports = function(router) {
  router.post("/convert", function(req, res) {
    controller.converstionrateController.create(req, res);
  });

  router.get("/converstionRate", function(req, res) {
    controller.converstionrateController.getAll(res);
  });

  router.get("/converstionRate/:sourceQty", function(req, res) {
    controller.converstionrateController.findBySource(req, res);
  });

  return router;
};
