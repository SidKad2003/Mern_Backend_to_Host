const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type:String,
        trim: true,
        required: [true, "Please add a Comment"]
    },
    amount: {
        type:Number,
        required: [true, "Please add a +ve or a -ve number"]
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
})


module.exports = mongoose.model('Transactions', TransactionSchema)