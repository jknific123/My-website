var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')
var ctrlLocations = require('../controllers/locations')
var ctrlUsers = require('../controllers/users')

/* GET home page. */
router.get('/', ctrlMain.index);

/* Location pages*/
router.get("/locations", ctrlLocations.allLocations)
router.get("/location", ctrlLocations.detailsLocation)
router.get("/location/comment/new", ctrlLocations.addComment)


module.exports = router;
