const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isLoggedIn = require("../config/config");
// api/users/register
router.post("/signup", async (req, res) => {
    let { name, email, password } = req.body;

    try {
      let user = new User({ name, email, password });

      user.password = await bcrypt.hash(password, 10);
      let userSaved = await user.save();
      res.json({ user: userSaved }).status(200);
    } catch (error) {
      res.json({ message: "unable to register try agin " }).status(400);
    }

  });

  // api/users/login
  router.post("/login", async (req, res) => {
    let { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User not found!1!!" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Not Matched!" });
      }

      const payload = {
        user: {
          id: user._id,
        },
      };

      jwt.sign(
        payload,
        "process.env.SECRET",
        { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;

          res.json({ token }).status(200);
        }
      );

      // res.json({ message: "You are loggedin!" }).status(200);
    } catch (error) {
      res.status(400).json({ message: "You are not loggedin!" });
    }
  });

  // /api/users/
  router.get("/user", isLoggedIn, async (req, res) => {
    // console.log(req.user);

    try {
      let user = await User.findById(req.user.id, "-password");

      if (!user) throw error;

      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ message: "something went wrong!" });
    }
  });

  // /api/users/user/update
  router.put("/user/update", isLoggedIn, async (req, res) => {
    console.log(req.user);
    console.log(req.body);
    let inputUser = { ...req.body };
    try {
      inputUser.password = await bcrypt.hash(req.body.password, 10);
      let user = await User.findByIdAndUpdate(req.user.id, inputUser);

      if (!user) throw error;

      res.status(200).json({ message: "User Updated!"});
    } catch (error) {
      res.status(400).json({ message: "something went wrong!!"});
    }
    //
  });

  module.exports = router;