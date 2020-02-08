'use strict';
const models = require('../db/models/index');
const status = require('http-status');

module.exports = {
    index: {
        get(req, res) {
            return models.Post
                .findAll({})
                .then(function (posts) {
                    res.status(status.OK)
                        .send({
                            success: true,
                            message: posts,
                            error: null,
                            token: null
                        });
                });
        },
    },

    create: {
        post(req, res) {
            return models.Post
                .create(req.body)
                .then(function (err, post) {
                    if (err) throw err;
                    else {
                        res.status(status.OK)
                            .send({
                                success: true,
                                message: post,
                                error: null,
                                token: null
                            });
                    }
                });
        },
    },

    view: {
        get(req, res) {
            return models.Post
                .findOne({
                    where: {
                        postId: req.body.postId
                    }
                })
                .then(function (err, post) {
                    if (err) throw err;
                    else {
                        res.status(status.OK)
                            .send({
                                success: true,
                                message: post,
                                error: null,
                                token: null
                            });
                    }
                })
        },
    },

    delete: {
        post(req, res) {
            return models.Post
                .destroy({
                    where: {
                        postId: req.body.postId
                    }
                })
                .then(function (err) {
                    if (err) throw err;
                    else {
                        res.status(status.OK)
                            .send({
                                success: true,
                                message: "Deleted.",
                                error: null,
                                token: null
                            });
                    }
                })
        },
    },
}

