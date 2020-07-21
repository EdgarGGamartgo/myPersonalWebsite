'use strict';
var properties = require('../package.json')
var distance = require('../service/distance');
var blogPosts = require('../service/blogPosts')

var controllers = {
    about:  (req, res) => {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        console.log('Success')
        res.json(aboutInfo);
    },
    getDistance: (req, res) => {
        distance.find(req, res,  (err, dist) => {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    getAllBlogPosts:  (req, res) => {
        blogPosts.getAll(req, res,  (err, dist) => {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};

module.exports = controllers;

