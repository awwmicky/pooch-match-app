const express = require('express');
const router = express.Router();
const db = require('../models');
const fs = require('fs');

router.get('/', (req, res) => {
    db.User.find({}).then(result => {
        res.json(result);
    });
});

router.post('/createNewUser', (req, res) => {
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        City: req.body.City,
        State: req.body.State,
        phone: req.body.phone
    }).then(result => {
        res.json(result);
    });
});

router.post('/addInterests/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        {
            $push: {
                Interests: {
                    Interests: req.body.Interests
                }
            }
        }).then(result => {
            res.send(result);
        });
});

router.post('/addPet/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        {
            $push: {
                Pets: req.body.Pets
            }
        }).then(result => {
            res.send(result);
        });
});

module.exports = router;