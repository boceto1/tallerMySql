const MODEL = require('../../models/model.model');


const createModel = async (model) => {
    const resposeCreateModel = await MODEL.create(model);
    return resposeCreateModel;
};

const findModelById = async (id) => 
                        MODEL.findAll({
                            where:{id}
                        });

const findModelByName = async (name) =>
                         MODEL.findAll({
                             where:{name}
                            }); 

const findAllModels = async () => MODEL.findAll();

module.exports = {
    createModel,
    findModelById,
    findModelByName,
    findAllModels
}