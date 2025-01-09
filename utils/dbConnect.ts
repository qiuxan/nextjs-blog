import mongoose from "mongoose";

const dbConnect = async () => {
    console.log(process.env.DB_URI); // Changed from MONGODB_URI to DB_URI
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }

//   return mongoose.connect(process.env.DB_URI as string); 
};

export default dbConnect;