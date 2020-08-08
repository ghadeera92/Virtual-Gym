const router = require("express").Router();
const Class = require("../models/class.model");
const Trainer = require("../models/trainer.model");
const isLoggedIn = require("../config/config");

router.post("/addClass", async (req, res) => {
  console.log("entering roooute");
  let {
    class_title,
    class_type,
    trainer,
    duration,
    startAt,
    date,
    class_titleription,
    image,
  } = req.body;

  console.log(req.body);
  try {
    let classObject = new Class({
      class_title,
      class_type,
      trainer,
      duration,
      startAt,
      date,
      class_titleription,
      image,
    });
    let classSaved = await classObject.save();
    res.json({ classObject: classSaved }).status(200);
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "unable to register" });
  }
});
// router.get("/class/listClass", async (req, res) => {
//     console.log("inside get ")
//     try {
//         let classList = await classObject.find();
//         res.json({ classList }).status(200);
//       } catch (error) {
//           console.log(error)
//         res.json({ message: "unable to list all classes" }).status(400);
//       }
// })

// /api/class/
router.get("/listClass", (req, res) => {
  Class.find()
    .then((listClass) => {
      res.json({ message: "success", listClass }).status(200);
    })
    .catch((error) => {
      console.log(error);
      res.json({ message: "unable to list all classes" }).status(400);
    });
});

// /api/class/
router.get("/edit/:id", (req, res) => {
  Class.findById(req.params.id, function (err, resultOneClass) {
    if (err) {
      console.log(err);
      res.send(500, { error: err });
    }
    res.json({ message: "success", resultOneClass }).status(200);
  });
});

// /api/class/
router.get("/trainers", (req, res) => {
  Trainer.find()
    .then((trainer) => {
      res.json({ message: "success", trainer }).status(200);
    })
    .catch((error) => {
      console.log(error);
      res.json({ message: "unable to list all trainers" }).status(400);
    });
});

// /api/class/
router.delete("/delete/:id", (req, res) => {
    console.log("on delete enterrr ...")
    Class.findByIdAndDelete(req.params.id).then(classObject => {
        console.log("on delete ...")
        res.json({message:"success Deleting"}
        )}).catch(error =>{
            console.log(error)
            res.json({ message: "unable to Delete Class" }).status(400);
        })
    });
// // /api/class/
//     router.put("/edit/:id", (req, res) => {
//         console.log("entering updddate method ")
//         let class_title = req.body.class_title;
//         let class_type = req.body.class_type;
//         let trainer = req.body.trainer;
//         let duration = req.body.duration;
//         let startAt = req.body.startAt;
//         let date = req.body.date;
//         let description = req.body.description;
//         let image= req.body.image;

//         Class.findByIdAndUpdate(req.params.id, {class_title, class_type, trainer,duration,startAt,date,description,image}, function (err, result) {

//             if (err) {
//                 console.log(err);
//                 res.send(500, {error: err});
//             }
//             res.json({message:"success Updating"})
//         });
//     });

module.exports = router;
// // Class Route
// const config = require("../config/liveconfig");
// const express = require("express");
// const bodyParser = require("body-parser");
// // const pino = require("express-pino-logger")();
// const { videoToken } = require("../tokens");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // app.use(pino);

// const sendTokenResponse = (token, res) => {
//   res.set("Content-Type", "application/json");
//   res.send(
//     JSON.stringify({
//       token: token.toJwt(),
//     })
//   );
// };

// app.get("/api/greeting", (req, res) => {
//   const name = req.query.name || "World";
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.get("/video/token", (req, res) => {
//   const identity = req.query.identity;
//   const room = req.query.room;
//   const token = videoToken(identity, room, config);
//   sendTokenResponse(token, res);
// });
// app.post("/video/token", (req, res) => {
//   console.log(req);
//   const identity = req.body.identity;
//   const room = req.body.room;
//   const token = videoToken(identity, room, config);
//   sendTokenResponse(token, res);
// });
