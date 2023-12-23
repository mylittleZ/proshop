import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    // deleteMany() and insertMany() are the method of MongoDB, to delete or insert data
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // Import (insert) data into the MongoDB database through a defined Mongoose model (following the schema specification).
        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            // creates a new object for each product with all properties of the original product, associating each product with the admin user
            return { ...product, user: adminUser };
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

// Corresponding to the scripts in the package.json file
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}