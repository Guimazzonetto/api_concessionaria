const router = require("express").Router();

const getAllCars = require("../services/getAllCars");
const get_car_by_id = require("../services/getCarById.js");
const get_car_by_model =  require("../services/getCarByModel.js");
const updateCar = require("../services/updateCar");
const validateNewCar = require("../services/validateNewCar");

router.get("/all", async function (req, res) {
    const {status, data} = getAllCars ();
    res.status(status).send(data);
});

router.get("/id/:id", async function (req, res) {
    const {status, data} = get_car_by_id (req.params.id);
    res.status(status).send(data);
});

router.get("/model/:model", async function (req, res) {
    const {status, data} = get_car_by_model (req.params.model);
    res.status(status).send(data);
});

router.put("/id/:id", async function (req, res) {
    const {status, data} = updateCar(req.params.id, req.body);
    res.status(status).send(data);
});

router.post("/new", async function (req, res) {
    const {status, data} = validateNewCar(req.body);
    res.status(status).send(data);
});

module.exports = router;