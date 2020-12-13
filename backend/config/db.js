import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb://irwantoadmin:irwantoadmin@cluster0-shard-00-00.vfbel.mongodb.net:27017,cluster0-shard-00-01.vfbel.mongodb.net:27017,cluster0-shard-00-02.vfbel.mongodb.net:27017/proshop?ssl=true&replicaSet=atlas-2hbbt4-shard-0&authSource=admin&retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
