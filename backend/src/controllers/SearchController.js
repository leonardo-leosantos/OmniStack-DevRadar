const Dev = require('../models/Dev');
const parseAsStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res){
        //buscar todos os devs num raio de 10km
        //filtrar por tecnologias

        const { latitude, longitude, techs } = req.query;

        const techsArray = parseAsStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude,latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return res.json({ devs});
    }
}