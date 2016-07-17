var express = require('express');
var router = express.Router();

var Post = require('../Models/mongo/posts.js');

//POST URL: /post
router.post('/delete', function(req, res) {
	console.log(req.body.id);
	Post.findOneAndRemove({_id: req.body.id},function(err,post){
		res.redirect('/matches');
	});
});


// GET URL /post/
router.get('/', function(req, res) {
    //Find All Post
    Post.find(function(err, post) {
        res.render('matches/index', { title: 'Matches', message: 'Welcome to the Matches page.', data:post});
    });
});
module.exports = router;