const mongoose = require('mongoose');
const contactSchema = mongoose.Schema;

const contact = new contactSchema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'User Id is required'],
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        minlength: 3
    },
    
},{timestamps: true});

module.exports = mongoose.model('Contact', contact);