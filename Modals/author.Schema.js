const mongoose = require('mongoose');


const User = mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
    },
    phone:{
        type: 'number',
        required: true,
    },
    isActive:{
        type: 'boolean',
        default: true,
    },
})


module.exports = mongoose.model('users',User)