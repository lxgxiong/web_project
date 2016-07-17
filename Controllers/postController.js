var express = require('express');
var router = express.Router();

var Post = require('../Models/mongo/posts.js');

//POST URL: /post
router.post('/', function(req, res) {
    var new_post = new Post({
        date: req.body.date,
        red: req.body.red,
        blue: req.body.blue,
        redkda:req.body.redkda,
        bluekda:req.body.bluekda,
        duration:req.body.duration
    });
    console.log(new_post);
    new_post.save(function(err) {
        if (err) console.log(err);
        console.log('Posted successfully!');
    });
    res.render('post/index', { title: 'Post', message: 'Welcome to the post page.'});
});


// GET URL /post/
router.get('/', function(req, res) {
    //Find All Post
    Post.find(function(err, post) {
        res.render('post/index', { title: 'Post', message: 'Welcome to the post page.', data:post});
    });
});
module.exports = router;