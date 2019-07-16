const CAR = require('../../models/car.model');


const createCar = async (car) => {
    const resposeCreateCar = await CAR.create(car);
    return resposeCreateCar;
};

const findAllCars = async () => CAR.findAll();

const findCarById = async (id) => 
                                    CAR.findAll({
                                        where:{id}
                                    })

const findCarByBrand = async (nameCar) => 
                                    CAR.findAll({
                                        where:{nameCar}
                                    })

const findCarByModel = async (nameModel) => 
                                    CAR.findAll({
                                        where:{nameModel}
                                    })

const changeOwnerCar = async (car) => {
    CAR.updateOne({ plate:car.plate}, {$set: { owner: car.owner}});
}

module.exports = {
    createCar,
    findAllCars,
    findCarById,
    changeOwnerCar,
    findCarByModel,
    findCarByBrand
};