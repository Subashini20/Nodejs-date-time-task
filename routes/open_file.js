var express = require("express");
var router = express.Router();
var datetimeModule = require('../module/datetimemodule');


router.get("/create",datetimeModule.create);
router.get("/view", datetimeModule.view);

module.exports = router;

