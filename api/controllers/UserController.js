'use strict';
const models = require('../db/models/index');
const status = require('http-status');

module.exports = {
    // Public Routes
    login: {
        post(req, res) {
            return models.User
                .findOne({
                    where: {
                        username: req.body.username,
                        password: req.body.password
                    }
                })
                .then(function (err) {
                    if (err) throw err;
                    else {
                        res.status(status.OK)
                            .send({
                                success: true,
                                message: "Login successful.",
                                error: null,
                                token: null
                            });
                    }
                })
        },
    },
    register: {
        post(req, res) {
            models.User
                .findOne({
                    where: {username: req.body.username},
                    attributes: ['username']
                })
                .then(function (user) {
                    if (!user) {
                        models.User
                            .create(req.body)
                            .then(function (err, user) {
                                if (err) throw err;
                                else {
                                    res.status(status.CREATED).send({
                                        success: true,
                                        user: user,
                                        message: 'Register successful.',
                                    });
                                }
                            })
                    }
                })
        },
    },
    // Private Routes
    index: {
        get(req, res) {
            models.User
                .findAll({})
                .then(function (users) {
                    res.status(status.OK)
                        .send({
                            success: true,
                            message: users,
                            error: null,
                            token: null
                        });
                });
        },
    },
    new: {
        post(req, res) {
            models.User
                .findOne({
                    where: {username: req.body.username},
                })
                .then(function (user) {
                    if (!user) {
                        models.User
                            .create(req.body)
                            .then(function (err, user) {
                                if (err) throw err;
                                else {
                                    res.status(status.CREATED).send({
                                        success: true,
                                        user: user,
                                        message: 'Register successful.',
                                    });
                                }
                            })
                    }
                })
        },
    }
};