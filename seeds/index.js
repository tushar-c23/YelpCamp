const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

main().catch(err => {
    console.log("Database not connected");
    console.log(err);
});

async function main() {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://localhost:27017/yelp-camp');
    console.log("Database connected")
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
};

const sample = array => array[Math.floor(Math.random() * array.length)]; //returns a random element of the array passed

const seedDB = async () => {
    await Campground.deleteMany({});
    // const c = new Campground({title: 'Purple Field'});
    // c.save(); //just to make sure if we can connect to the database or not
    for(let i=0; i<50; i++)
    {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random()*20)+10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tenetur natus porro quam labore maiores dicta. Id consequatur odit qui. Tempora amet sint deserunt, illo fugit incidunt neque molestias aut!',
            price
        })
        await camp.save();
    }
};

seedDB().then( () => {
    mongoose.connection.close()
});