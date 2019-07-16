const express = require('express')
const api = express.Router()

const { getAllOwners, postOwner, getOwnerByDNI } = require ('../operations/API/owner.api');

api.route('')
    .get(getAllOwners)
    .post(postOwner);

api.route('/:dni')
    .get(getOwnerByDNI);



module.exports = api;