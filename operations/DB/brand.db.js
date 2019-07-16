const BRAND = require('../../models/brand.model');


const createBrand = async (brand) => {
    const resposeCreatedBrand = await BRAND.create(brand);
    return resposeCreatedBrand;
};

const findBrandById = async (id) => 
                        BRAND.findAll({
                            where:{id}
                        });

const findBrandsByName = async (name) => 
                        BRAND.findAll({
                            where:{name}
                        });

const findAllBrands = async () => BRAND.findAll();

module.exports = {
    createBrand,
    findBrandById,
    findBrandsByName,
    findAllBrands
}