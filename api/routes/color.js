var express = require('express');
var router = express.Router();

var colorCtrl = require('../controllers/colorCtrl');

router.get('/', colorCtrl.index);
router.post('/color', colorCtrl.createColor);
router.get('/color/item/:colorId', colorCtrl.getColorById);
router.get('/color/list', colorCtrl.getColorList);
router.delete('/color/item/:colorId', colorCtrl.removeColors
);

module.exports = router;