const database = require("../database.json");

module.exports = function updateCar(car_id, payload) {
    if (car_id) {
        for (let i = 0; i < array.length; i++) {
          if (database.cars[i].id == cars.id){
            payload.brand ? database.cars[i].brand = payload.brand : database.cars[i].brand = database.cars[i].brand;
            payload.model ? database.cars[i].model = payload.model : database.cars[i].model = database.cars[i].model;
            payload.year ? database.cars[i].year = payload.year : database.cars[i].year = database.cars[i].year;
            payload.doors_quantity ? database.cars[i].doors_quantity = payload.doors_quantity : database.cars[i].doors_quantity = database.cars[i].doors_quantity;
            payload.color ? database.cars[i].color = payload.color : database.cars[i].color = database.cars[i].color;
            return {
              status: 200,
              data: database.cars[i]
            };
          }; 
        };
        return {
            status: 400,
            data: "Carro não encontrado na base de dados."
        };
    } else {
        return {
            status: 400,
            data: "Falta parâmetro"
        };
    };
};