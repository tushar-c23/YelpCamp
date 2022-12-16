const mongoose = require('mongoose');
const Schema = mongoose.Schema; //shortens the use of mongoose.Schema for later references

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema); //what we want to export is the final model of the CampgroundSchema