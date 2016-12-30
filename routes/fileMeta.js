var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest : '../public/uploads'});

/* Send JSON response. */
router.post('/', upload.single('fFile'), function(req, res, next){
    res.json({
      size : req.file.size,
      unit : "bytes"
    });
});

module.exports = router;
