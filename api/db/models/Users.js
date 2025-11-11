const mongoose = require('mongoose');
const schema = mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActive: {type: Boolean, required: true},
    name: String,
    surname: String,
    phone: String,
}, {
    versionKey: false,
    timestamps: true
})

class Users extends mongoose.Model {

}

schema.loadClass(Users);
module.exports = mongoose.model("users", schema);