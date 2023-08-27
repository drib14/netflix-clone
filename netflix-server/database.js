const mongoose = require("mongoose");

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster1.gcx5yt0.mongodb.net/Netflix?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

module.exports = Connection;
