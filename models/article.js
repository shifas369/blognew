
const mongoose = require('mongoose'); //Initialization

//schema definition
const Schema = mongoose.Schema;

const Article_Detail = new Schema({

    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        
    }

})
const ArticleData = mongoose.model('article', Article_Detail);

module.exports = ArticleData;