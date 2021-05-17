const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    rating: {type: Number, required: [true, 'Pleases select a rating']},
    comment: {type: String, required: [true, 'Comment must have content'], minlength: 3}
}, {timestamps: true})
const Comment = mongoose.model('Comment', CommentSchema);

const CakeSchema = new mongoose.Schema({
    baker: {type:String, required: [true, "Baker's name must be provided"], minlength: 3},
    image: {type:String, required: [true, "Image Url must be provided"], minlength: 6},
    comments: [CommentSchema]
}, {timestamps:true})
const Cake = mongoose.model('Cake', CakeSchema)

module.exports = {
    Comment:Comment,
    CommentSchema:CommentSchema,
    Cake: Cake,
    CakeSchema: CakeSchema
}