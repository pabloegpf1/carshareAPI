var express = require('express');
var router = express.Router();

var knex = require('knex')({
  client: 'postgresql',
        connection: 'postgres://rlbrihzjnfnugv:33da88ab8eda84c947762e7578f8284ecf330b45e51fa9d6001a78f683bfcc29@ec2-54-243-128-95.compute-1.amazonaws.com:5432/d8dpukqgj5vq74?ssl=true',
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Pablo' });
});

//GET requests
router.get('/users', function(req, res, next) {
	knex.select().table('users')
	.then(function(users){
		res.json(users)
	})
});

router.get('/drivers', function(req, res, next) {
    knex.select().table('drivers')
    .then(function(drivers){
        res.json(drivers)
    });
});

router.get('/rides', function(req, res, next) {
    knex.select().table('rides')
    .then(function(rides){
        res.json(rides)
    });
});

router.get('/locations', function(req, res, next) {
    knex.select().table('locations')
    .then(function(locations){
        res.json(locations)
    });
});

//POST requests
router.post('/user', function(req, res, next) {
    console.log(JSON.stringify(req.body));
    knex('users').insert(req.body)
    .then(res.send("Success"))
    .catch(function(err) {
        console.log(err.stack);
    })
});

router.post('/driver', function(req, res, next) {
    console.log(JSON.stringify(req.body));
    knex('drivers').insert(req.body)
    .catch(function(err) {
        console.log(err.stack);
    })
});

router.post('/ride', function(req, res, next) {
    console.log(JSON.stringify(req.body));
    knex('rides').insert(req.body)
    .then(res.send("Success"))
    .catch(function(err) {
        console.log(err.stack);
    })
});

router.post('/location', function(req, res, next) {
    console.log(JSON.stringify(req.body));
    knex('locations').insert(req.body)
    .then(res.send("Success"))
    .catch(function(err) {
        console.log(err.stack);
    })
});

module.exports = router;
