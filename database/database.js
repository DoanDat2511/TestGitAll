/**
 Khoá học FullStackNodejs 2019 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các Models, Schemas, hàm kết nối CSDL MongoDB
 */
const mongoose = require("mongoose");
//Kết nối CSDL MongoDB
const connectDatabase = async () => {
  try {
    let uri = "mongodb://localhost:27017/demo";
    let options = {
      connectTimeoutMS: 10000, // 10 giây
      useNewUrlParser: true,
      useCreateIndex: true,
      poolSize: 10, // Maintain up to 10 socket connections
    };
    await mongoose.connect(uri, options);
    console.log("Connect Mongo Database successfully");
  } catch (error) {
    console.log(`Cannot connect Mongo. 1Error dfsdf: ${error}`);
  }
};
connectDatabase();
module.exports = {
  mongoose,
};
