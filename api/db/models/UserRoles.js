const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userId: {type: mongoose.schemaTypes.ObjectId, required: true},
    roleId: {type: mongoose.schemaTypes.ObjectId, required: true},

}, {
    versionKey: false,
    timestamps: true
})

class UserRoles extends mongoose.Model {

}

schema.loadClass(UserRoles);
module.exports = mongoose.model("userRoles", schema);