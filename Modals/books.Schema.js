const mongoose = require('mongoose');

const Book = mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    Price:{
        type: 'number',
        required: true,
    },
    description:{
        type: 'string',
        required: true,
    },
    isPublished:{
        type: 'boolean',
        default: true,
    },
    genre:[String]
    },{versionKey:false,timestamps:true});

module.exports = mongoose.model('books',Book)