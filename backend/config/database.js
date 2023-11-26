import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`MongoDB connected with server ${data.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
    });
};
 