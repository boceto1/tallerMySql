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

const findCarByModel = async (model) => 
                                CAR.findAll({
                                     where:{model}
                                    });
const changeOwnerCar = async (id,owner) => CAR.findByIdAndUpdate(id,{owner}, {new: true});

module.exports = {
    createCar,
    findAllCars,
    findCarByModel,
    findCarByBrand
    
};