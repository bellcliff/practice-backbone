var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var db = MongoClient.connect('mongodb://localhost/qs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/qs', function(req, res, next){
    db.then(function(_db){
        return _db.collection('question').find({}).limit(20).toArray()
    })
    .then(res.json.bind(res))
    .catch(console.log)
})

module.exports = router;
