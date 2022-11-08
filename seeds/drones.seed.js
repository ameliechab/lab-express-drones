require("dotenv/config");
require("./../db");
const Drone = require("./../models/Drone.model.js");

const drones = [
  {
    name: "DarkStar",
    propellers: 2,
    maxSpeed: 16,
  },
  {
    name: "Global Hawk",
    propellers: 4,
    maxSpeed: 20,
  },
  {
    name: "Hunter",
    propellers: 3,
    maxSpeed: 18,
  },
];

seeds();

async function seeds() {
  await Drone.deleteMany();
  await Drone.create(drones);
}
