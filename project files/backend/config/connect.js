const mongoose = require("mongoose");

const connectionOfDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'video-course-application',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectionOfDb;
