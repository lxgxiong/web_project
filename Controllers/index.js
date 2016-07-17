var express = require('express');
module.exports = function (config, app) {
  /* Default Route */
  app.get('/', function (req, res) {
    res.render('index', { title: 'Home', message: 'Welcome'});
  });

  app.use("/post",require("./postController"));
  app.use("/matches",require("./matchesController"));
};