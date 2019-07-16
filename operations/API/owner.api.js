const {createOwner, findOwnerByDNI, findAllOwners } = require ('../DB/owner.db');

const getAllOwners = async (req,res) => {

    const foundOwners = await findAllOwners();
    res.status(200).json(foundOwners);
};


const postOwner = async (req,res) => {
    const owner = req.body;

    try {
        const createdOwner = await createOwner(owner);
        res.status(200).json(createdOwner);   
    } catch (error) {
        res.status(400).json(error);
    }
}

const getOwnerByDNI = async (req,res) => {
    
    const dni = req.params.dni;

    const foundOwner = await findOwnerByDNI(dni);

    if(!foundOwner || foundOwner.length===0){
        res.status(404).json({error:"Owner not found"});
        return;
    }
    res.status(200).json(foundOwner);
}


module.exports = {
    getAllOwners,
    getOwnerByDNI,
    postOwner
}