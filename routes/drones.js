const express = require("express");
const router = express.Router();
const Drone = require("./../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await Drone.find();
    res.render("drones/list", { allDrones });
  } catch (error) {
    next(error);
  }
});

router.get("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render("drones/create-form");
  } catch (error) {
    next(error);
  }
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  try {
    await Drone.create({ name, propellers, maxSpeed });
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.get("/drones/:id/update", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const myDrone = await Drone.findById(req.params.id);
    res.render("drones/update-form", { myDrone });
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/update", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log(updatedDrone);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await Drone.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
