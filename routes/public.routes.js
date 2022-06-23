const express = require("express");
const router = express.Router();
const { Location, Review } = require("../models");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;


router.get("/public", (req, res) => {
  return res.send("You have called a public route");
});

router.get("/public/location", async (req, res) => {
  try {
    const results = await Location.findAll();
    console.table(JSON.parse(JSON.stringify(results)));
    return res.send(JSON.stringify(results));
  } catch (err) {
    console.log(err);
  }
});

router.get("/public/reviews", async (req, res) => {
  try {
    const results = await Review.findAll();
    console.table(JSON.parse(JSON.stringify(results)));
    return res.send(JSON.stringify(results));
  } catch (err) {
    console.log(err);
  }
});

router.get(
  "/public/location/:located_at/:cuisineId/:priceId",
  async (req, res) => {
    try {
      const results = await Location.findAll({
        where: {
          [Op.and]: [
            { located_at: req.params.located_at },
            { cuisineId: req.params.cuisineId },
            { priceId: req.params.priceId },
            ],
        },
      });
      console.table(JSON.parse(JSON.stringify(results)));
      return res.send(JSON.stringify(results));
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
