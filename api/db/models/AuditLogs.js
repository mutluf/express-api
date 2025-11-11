const mongoose = require('mongoose');

const schema = mongoose.Schema({
    level: String,
    email: String,
    location: String,
    procType: String,
    logs: String,
}, {
    versionKey: false,
    timestamps: true
})

class AuditLogs extends mongoose.Model {

}

schema.loadClass(AuditLogs);
module.exports = mongoose.model("auditLogs", schema);