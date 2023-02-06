const express = require("express");
const cors = require("cors");

const userRouters = require("./routers/userRouters");

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.use("/api/user", userRouters);

app.get("/", (req,res) => {
  console.log(`API is listening on port ${PORT}`);
  res.send("CRUD App");
});

app.listen(3000);

// path

const path = require("path");

let result = path.basename("/public_html/home/index.html");
console.log(result);

// Models Sync

// let db = require("./models/index.js");

// (async () => {
//   try {
//     await db.sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }

//   await db.sequelize.sync({ force: true });
//   console.log("All models were synchronized successfully.");
// })();
