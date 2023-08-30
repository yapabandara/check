const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    fname : {
        type : String,
        required: true
    },

    lname : {
        type : String,
        required: true
    },

    dob : {
        type : String,
        required: true
    },

    nic : {
        type : String,
        required: true
    },

    gender : {
        type : String,
        required: true
    },

    address : {
        type : String,
        required: true
    },

    phone : {
        type : String,
        required: true
    },

    landOwnerName : {
        type : String,
        required: true
    },

    deedNo : {
        type : String,
        required: true
    },

    feildSize : {
        type : Number,
        required: true
    },

    MPACode : {
        type : String,
        required: true
    }
})

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;



