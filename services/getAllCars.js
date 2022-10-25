const database = require("../database.json");

module.exports = function getAllCars(){
    return {
        status: 200,
        data: database.cars
    };
};