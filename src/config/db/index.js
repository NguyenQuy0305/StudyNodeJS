const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://Quy_01:Egdstudy0305@quycluster.2uxfc.mongodb.net/learn_nodejs_dev?retryWrites=true&w=majority');
        console.log('Connect successfully!');
    } catch (error) {
        console.log('Connect failure!');
    }
}

module.exports = { connect };