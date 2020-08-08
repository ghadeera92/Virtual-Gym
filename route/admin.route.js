/***  No need for admin route we can control our app from admin panel ***/








// // Admin route
// const router = require("express").Router();
// const Trainer = require("../models/trainer.model");
// const jwt = require("jsonwebtoken");
// const isLoggedIn = require("../config/config");
// var formidable = require("formidable");
// var fs = require("fs");

// router.post("/addtrainer", async (req, res) => {
//   //   var form = new formidable.IncomingForm();
//   //   form.parse(request, function (err, fields, files) {
//   //     var oldPath = files.filetoupload.path;
//   //     var imagePath = "/dbimg/" + files.filetoupload.name;
//   //     var uploadPath = "../frontend/public/dbimg" + files.filetoupload.name;

//   //     fs.rename(oldPath, uploadPath, function (err) {
//   //       if (err) throw err;
//   //       else {
//   //         fields.image = imagePath;
//   //         let trainer = new Trainer(fields);
//   //         trainer
//   //           .save()
//   //           .then(() => {
//   //             res.json({ trainer: trainerSaved }).status(200);
//   //           })
//   //           .catch((err) => {
//   //             res.json({ message: "unable to register try agin " }).status(400);
//   //           });
//   //       }
//   //     });
//   //   });

//   let { name, description, image } = req.body;
//   try {
//     let trainer = new Trainer({ name, description, image });
//     let trainerSaved = await trainer.save();
//     res.json({ trainer: trainerSaved }).status(200);
//   } catch (error) {
//     res.json({ message: "unable to register try agin " }).status(400);
//   }
// });

// module.exports = router;
