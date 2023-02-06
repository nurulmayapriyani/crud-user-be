const db = require("../models");
const User = db.tbl_user;
var bcrypt = require("bcrypt");
const saltRounds = 10;
// const app = express();

const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(user[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewUser= async (req, res) => {
  // console.log(req.body, "add")
  // try {
  //   await User.create(req.body);
  //   res.json({
  //     message: "user added",
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
    try{
    await bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      User.create({
        userId: req.body.userId,
        fullName: req.body.fullName,
        userName: req.body.userName,
        password: hash,
        status: req.body.status,
    })
    res.json({
          message: "user added",
        });
    })
  }catch (err) {
    console.log(err);
}
}

const updateOneUser = async (req, res) => {
  console.log(req.body, "edit")
  try {
    const editOneUser = await User.update(req.body, {
      where: {
        id: req.params.id
      },
    })
    console.log(editOneUser);
    res.status(200).json({
      message: "User Updated",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteOneUser= async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  addNewUser,
  updateOneUser,
  deleteOneUser,
};
