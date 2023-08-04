import mongoose from "mongoose";

export const conectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/mernlogin");
        console.log(">> DB Connect");
    } catch (error) {
        condole.log(error)
    }
}