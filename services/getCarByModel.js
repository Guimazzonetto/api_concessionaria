const database = require("../database.json");

module.exports = function get_car_by_model (car_model) {
    for (let i = 0; i < database.cars.length; i++) {
        if(database.cars[i].model == car_model) {
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
};