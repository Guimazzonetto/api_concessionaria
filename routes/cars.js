const router = require("express").Router();

const database = require("../database.json");

router.get("/all", async function (req, res) {
    res.status(200).send(database.cars)
});

router.get("/:id", async function (req, res) {
    for (let i = 0; i < database.cars.length; i++) {
        if (database.cars[i].id == req.params.id) {
            res.status(200).send(database.cars[i]);
        }
    };
});

router.put("/cars/:id", async function(req, res) {
    let find = false;
    for (let i = 0; i < database.cars.length; i++) {
        if (database.cars[i].id == req.params.id) {
            req.body.brand ? database.cars[i].brand = req.body.brand : database.cars[i].brand = database.cars[i].brand;
            req.body.model ? database.cars[i].model = req.body.model : database.cars[i].model = database.cars[i].model;
            req.body.year ? database.cars[i].year = req.body.year : database.cars[i].year = database.cars[i].year;
            req.body.doors_quantity ? database.cars[i].doors_quantity = req.body.doors_quantity : database.cars[i].doors_quantity = database.cars[i].doors_quantity;
            req.body.color ? database.cars[i].color = req.body.color : database.cars[i].color = database.cars[i].color;
            req.body.id ? database.cars[i].id = req.body.id : database.cars[i].id = database.cars[i].id;
            find = true;
            res.status(200).send(database.cars);
            }
        if (find == false) res.status(400).send("ID não encotrato");
    };
});

router.post("/cars/new", async function (req, res) {
    
});

function validate_inputs (body) {
    if (body.brand && body.model && body.year && body.id){
        res.status(200)
    } else{
        res.status(400).send("Campos obrigatórios não informados")
    }
}
module.exports = router;