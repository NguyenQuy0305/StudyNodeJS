const res = require("express");
const Course = require('../models/Course');

class NewsController {

    // [GET] /
    index(req, res) {

        Course.find({}, function(err, courses){
            if(!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'Error' });
            }
        });
        //res.render('home');
    }

}

module.exports = new NewsController;
