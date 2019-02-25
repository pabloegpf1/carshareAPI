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

router.get('/users', function(req, res, next) {
	knex.select().table('users')
	.then(function(users){
		res.send(JSON.stringify(users))
	});
});

module.exports = router;
