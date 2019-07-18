const CAR = require('../../models/car.model');


const createCar = async (car) => {
    const resposedCreatedCar = await CAR.create(car);
    return resposedCreatedCar;
};

const findAllCars = async () => CAR.findAll();

const findCarById = async (plate) => 
                        CAR.findAll({
                            where:{plate}
                        });

const findCarByBrand = async (brand) => 
                            CAR.findAll({
                                 where:{brand}
                                });

const findCarByModel = async (model) => 
                                CAR.findAll({
                                     where:{model}
                                    });
const changeOwnerCar = async (plate,owner) => 
                                CAR.update({
                                    owner:{owner},
                                    where:{plate}
                                });

module.exports = {
    createCar,
    findCarById,
    findAllCars,
    findCarByModel,
    findCarByBrand,
    changeOwnerCar
};