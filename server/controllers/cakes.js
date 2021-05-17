const mongoose = require('mongoose');
const {Cake} = require('../models/cake.js')
const {Comment} = require('../models/cake.js')

module.exports = {
    index: (req, res) => {
        Comment.find()
            .then(comment => {
                Cake.find()
                    .then(cake => res.json(cake)) 
                    // {errors:errors} where does that go
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err));
    },

    display: (req, res) => {
        Cake.findOne({_id: req.params.id})
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },

    createCake: (req, res) => {
        const cake = new Cake();
        cake.baker = req.body.baker;
        cake.image = req.body.image; 
        cake.save()
            .then(newCakeData => {
                console.log('cake created', newCakeData)
                res.json(newCakeData)
            })
            .catch(err => {
                res.json(err)
            })
    },

    addComment: (req, res) => {
        console.log('I made it')
        const comment = new Comment();
        comment.rating = req.body.rating;
        comment.comment = req.body.comment;
        comment.save()
            .then(newCommentData => {
                console.log('I made it again', newCommentData)
                Cake.findOne({_id: req.params.id})
                    .then(cakeData => {
                        console.log('Yep', cakeData)
                        cakeData.comments.push(newCommentData)
                        cakeData.save()
                            .then(updatedCake => {
                                console.log('Comment created', updatedCake)
                                res.json(updatedCake)
                            })
                            .catch(err => res.json(err))
                        })
                    .catch(err => res.json(err))
            })
            .catch(err => {
                res.json(err)
            })
    },
    destroy: (req, res) => {
        Cake.deleteOne({_id: req.params.id})
                .then(deletedCake => res.json(deletedCake))
                .catch(err => res.json(err));
    }
}