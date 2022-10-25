const database = require("../database.json");

module.exports = function get_car_by_id (car_id) {
    for (let i = 0; i < database.cars.length; i++) {
        if (database.cars[i].id == car_id) {
            return {
                status: 200,
                data: database.cars[i]
            };
        };  
    };
    return {
        status: 400,
        data: "O carro não foi encontrado na base de dados."
    };
};