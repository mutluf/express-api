const mongoose = require('mongoose');

let instance = null;

class Database {
    constructor() {
        if (!instance) {
            this.mongoConnection = null;
            instance = this;
        }
        return instance;
    }

    async connect(options) {
        try {
            console.log("Connecting to database...");
            let db = await mongoose.connect(options.CONNECTION_STRING);

            // const Users = require("./models/Users");
            // const user = await Users.create({
            //     email: "test@gmail.com",
            //     password: "123456",
            //     isActive: true,
            //     name: "Fatma",
            //     surname: "Mutlu",
            //     phone: "5554443322"
            // });
            this.mongoConnection = db;
            console.log("Database connected.");
        }
        catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
}
module.exports = Database;