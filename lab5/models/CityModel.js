const { default: mongoose } = require('mongoose');
const mongodb = require('mongoose');
const CitySchema = mongodb.Schema(
    {
        name: String
    }
);

const CityModel = mongoose.model("cities", CitySchema);
module.exports = CityModel