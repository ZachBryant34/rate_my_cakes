const mongoose = require('mongoose');
const cakes = require('../controllers/cakes.js')

module.exports = function(app) {
    app.get('/', (req, res) => {

    })
    app.get('/cakes', (req, res) => {
        cakes.index(req, res)
    })
    app.get('/cakes/:id', (req, res) => {
        cakes.display(req, res)
    })
    app.post('/new/cakes', (req, res) => {
        cakes.createCake(req, res)
    })
    app.post('/add/comment/:id', (req,res) => {
        cakes.addComment(req, res)
    })
    app.delete('/remove/:id', (req, res) => {
        cakes.destroy(req, res)
    })
}