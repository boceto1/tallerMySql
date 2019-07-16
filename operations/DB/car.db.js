const CAR = require('../../models/car.model');


const createCar = async (car) => {
    const resposedCreatedCar = await CAR.create(car);
    return resposedCreatedCar;
};

const findAllCars = async () => CAR.findAll();

const findCarByBrand = async (brand) => 
                            CAR.findAll({
                                 where:{brand}
                                });

module.exports = {
    createCar,
    findAllCars,
    findCarByBrand
};