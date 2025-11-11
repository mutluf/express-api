const mongoose = require('mongoose');

const schema = mongoose.Schema({
    permission:{type:String, required: true},
    roleId:{type:mongoose.schemaTypes.ObjectId, required:true},
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

class RolePrivileges extends mongoose.Model {

}

schema.loadClass(RolePrivileges);
module.exports = mongoose.model("rolePrivileges", schema);