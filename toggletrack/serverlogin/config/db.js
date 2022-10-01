const mongoose = require('mongoose');
const connect = () => {
    return mongoose.connect("mongodb+srv://prem:prem@cluster0.keahpj3.mongodb.net/project");
}

module.exports = connect