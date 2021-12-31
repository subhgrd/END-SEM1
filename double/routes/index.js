var express = require('express');
const doubles = require('../models/double');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
 });

router.get('/1', function(req, res, next) {
  //es.send('respond with a resource');
  doubles.find({}, function(err, rows){
    console.log(rows[0].url)
    const picUrl= rows[1].url;
    const picUrl1= rows[1].url;
    const picUrl2= rows[2].url;
    const picUrl3= rows[3].url;

    res.render('index',{picUrl,picUrl1,picUrl2,picUrl3})
});
});


module.exports = router;



