const router = require("express").Router();
const charityRoutes = require("./charities");
const rapidapiRoutes = require("./rapidapi");

router.use("/charities", charityRoutes);
router.use("/rapidapi", rapidapiRoutes);

module.exports = router;
