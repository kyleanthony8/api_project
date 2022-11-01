import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);


const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/starwars'

mongoose.connect(url , mongooseConfig)

//mongoose
  //.connect("mongodb://127.0.0.1:27017/starwars")
  .catch((err) => {
    console.log(`Error connection go MongoDB: ${err.message}`);
  });

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${ err }`));
});

export default mongoose.connection;