const database = require("../database.json");

module.exports = function validateNewCar (payload) {
    if (payload.brand && payload.model && payload.year && payload.id) {
        return {
            status: 200,
            data: "O veículo foi inserido na base de dados."
        }
    } else {
        return {
            status: 400,
            data: "Algum campo obrigatório não foi preenchido."
        };
    };
};