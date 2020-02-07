'use strict';
const models = require('../db/models/index');
const status = require('http-status');

module.exports = {
    viewUsers: {
        get(req, res) {
            return models.User.findAll({})
                .then(function (users) {
                     res.status(status.OK)
                        .send({
                            success: true,
                            message: json(users),
                            error: null,
                            token: null
                        });
                });
        },
    },
    addUser: {
        post(req, res) {
            return models.User.findAll({})
                .then(function (users) {
                    res.status(status.OK)
                        .send({
                            success: true,
                            message: json(users),
                            error: null,
                            token: null
                        });
                });
        },
    },
    viewPosts: {
        get(req, res) {
            models.Post.findAll({}).then(function (posts) {
                return res.status(status.OK).send({
                    success: true,
                    message: json(posts),
                    error: null,
                    token: null
                });
            });
        },
    }
}

