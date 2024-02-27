const mongoose = require("mongoose");
const { School, Student } = require("./db/school");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/school");
  console.log("database started");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const db = async () => {
  //   const data = await School.create({ name: "test1", class: 2, _id : "hgjghjgjgjgjgjgj" });
  //   const data = await School.find({
  //     $or: [{ class: { $gt: 3 } }, { name: "test1" }],
  //   });

  // const data = await School.findOne({ name: "test1" });

  // const data = await Student.findOneAndUpdate({ name: "GJ" }, { name: "gj" });
  const data = await Student.findOneAndDelete({ name: "GL" });
  console.log(data);
};

db();
