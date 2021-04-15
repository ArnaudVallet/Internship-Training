// Import du ou des Models à utiliser pour l'api Products
const { Products } = require("./../models/ProductModel");

// Function to populate DB
const create3FakeProducts = async() => {
    // Fake products data
    const products = [
        { name: 'Table basse', description: 'Super table basse', price : 50 },
        { name: 'Tabouret', description: 'Tabouret en cuire', price : 50 },
        { name: 'Canapé d\'angle', description: 'Canépé confortable', price : 200 },
    ]
    // Using insertMany method of Mongoose
    const createdProducts = await Products.insertMany(products, {ordered: false});
    return createdProducts;
}

// Get all the products
const getAllProducts = async() => {
    let getAll = await Products.find()
    console.log('all products', getAll);
    return getAll;
}

// Find the products matching the price
const findByPrice = async (price) => {
    let products = await Products.findByPrice(Number(price));
    return products ? products : [];
}

// Export all the functions
module.exports = {
    create3FakeProducts,
    getAllProducts,
    findByPrice
}
