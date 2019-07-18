const  BRAND = require ('../DB/brand.db');
const  MODEL = require ('../DB/model.db');
const OWNER = require('../DB/owner.db');
const CAR = require('../DB/car.db');


const { cars_Owner_Age_Greater_Than } = require('../VALIDATORS/car.validators')

const postCar = async (req, res) => {
    const car = req.body;
    const nameBrand = car.brand;
    const model = car.model;
    const dniOwner = car.owner;

    try{
    const foundOwner = await OWNER.findOwnerByDNI(dniOwner);

    if(foundOwner.length!==1) {
        res.status(404).json({err:"The owner doesn't exist"});
        return;
    };

    const foundBrand = await  BRAND.findBrandsByName(nameBrand); 

    if(foundBrand.length!==1) {
        res.status(404).json({err:"The brand doesn't exist"});
        return;
    }
    
    car.brand = foundBrand[0].id;

    const foundModel = await MODEL.findModelByName(model);

    if(foundModel.length!==1){
        res.status(404).json({err:"The model doesn't exist"});
        return;
    }

    car.model = foundModel[0].id;

    const createdCar = await CAR.createCar(car);

    res.status(200).json({newCar:createdCar});
    }catch(error){
        res.status(500).json(error);
    }
}

const getAllCars = async (req, res) => {

    const ageGreaterThan = req.query.ageGreaterThan || 0;

    const cars = await CAR.findAllCars();

    const filteredCars = cars_Owner_Age_Greater_Than(ageGreaterThan,cars);

    res.status(200).json({cars:filteredCars});
};

const getBrandById = async (req, res) => {
    try {
        const id = req.params.id;
        const foundCar = await CAR.findCarById(id);
        
        if(!foundCar){
            res.status(404).json({car:foundCar});
            return;
        }
        res.status(200).json({car:foundCar});

    } catch (error) {
        res.status(500).json({error});    
    }
};

const changeOwner = async (req, res) => {
    res.send("Works well");
};

const getAllCarsByBrands = async (req, res) => {
    const nameBrand = req.params.nameBrand;
    console.log(nameBrand);
    const foundBrand = await  BRAND.findBrandsByName(nameBrand); 

    if(foundBrand.length===0) {
        res.status(404).json({err:"The brand doesn't exist"});
        return;
    }

    const foundCar = await CAR.findCarByBrand(foundBrand[0].id);

    res.status(200).json({car:foundCar});
};

const getAllCarsByModels = async (req, res) => {
    const nameModel = req.params.nameModel;

    const foundModel = await MODEL.findModelByName(nameModel);

    if(foundModel.length===0){
        res.status(404).json({err:"The model doesn't exist"});
        return;
    }
    const foundCar = await CAR.findCarByModel(foundModel[0].id);

    res.status(200).json({car:foundCar});
};


module.exports = {
    postCar,
    getAllCars,
    getBrandById,
    changeOwner,
    getAllCarsByBrands,
    getAllCarsByModels
};

