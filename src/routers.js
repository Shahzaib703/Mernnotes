const express = require("express");

const router = express.Router();
const react = require("./db/modle");


router.get("/api/reactjs/Questions", async (req, resp) => {
  try {
    const Result = await react.find().select({question:1});
    resp.send(Result);
  } catch (err) {
    resp.status(401).send(err);
  }
});

router.post("/api/reactjs", async (req, resp) => {
  try {
    const data = new react(req.body);
    const result = await data.save();
    resp.send(result);
  } catch (err) {
    resp.status(401);
  }
});
router.get("/api/reactjs", async (req, resp) => {
  try {
    const Result = await react.find();
    resp.send(Result);
  } catch (err) {
    resp.status(401);
  }
});

router.get("/api/reactjs/:id", async (req, resp) => {
  try {
    const _id = req.params.id; 
    const Result = await react.find({_id});
    resp.send(Result);
  } catch (err) {
    resp.status(401);
  }
});


router.patch("/api/reactjs/:id", async (req, resp) => {
  try {
      const _Id = req.params.id;
    const Result = await react.findByIdAndUpdate(_Id,req.body,{new:true});
    resp.send(Result);
  } catch (err) {
    resp.status(400);
  }
});

router.delete("/api/reactjs/:id", async (req, resp) => {
  try {
    const _id = req.params.id;
    const result = await react.findByIdAndDelete(_id);
    resp.send(result);
  } catch (err) {
    resp.status(401);
  }
});

module.exports = router;