const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/workouts", function(req, res) {
    console.log(req.body);

    db.Workout.create(req.body).then(function(data) {
      res.json(data);
    });
  });
  app.put("/api/workouts/:id", function(req, res) {
    console.log("req.params", req.params);
    console.log("req.body", req.body);

    db.Workout.update(
      {
        _id: req.params.id
      },
      { $push: { exercises: req.body } }
    ).then(function(data) {
      console.log(data);

      res.json(data);
    });
  });
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).then(function(data) {
      res.json(data);
    });
  });
};
