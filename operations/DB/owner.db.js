const OWNER = require ('../../models/owner.model');


const createOwner = async (owner) => {
    const resposeCreatedOwner = await OWNER.create(owner);
    return resposeCreatedOwner;
};

const findOwnerByDNI = async (dni) => 
                        OWNER.findAll({
                            where:{dni}
                        });

const findAllOwners = async () => OWNER.findAll();

module.exports = {
    createOwner,
    findOwnerByDNI,
    findAllOwners
}