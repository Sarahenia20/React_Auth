import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";
//import ENV from '../config.js'

async function connect(){

    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strictQuery', true)
    const db = await mongoose
    .connect(
        "mongodb+srv://sarah_henia:cherrimongoli21S@clustersh.2ptpd2k.mongodb.net/Taskify?retryWrites=true&w=majority"
    );

    console.log("Database Connected")
    return db;
}

export default connect;