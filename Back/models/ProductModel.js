const mongoose = require('mongoose');
//const { Schema } = mongoose;

const productSchema = mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    description: String,
    price:   Number,
    categories: [{}],
    modules: {}
}, {timestamps: true});

productSchema.statics.findByPrice = async function(price) {
    const prod = await Products.find({'price': price});
    return prod ? prod : `No matching Product result for price = ${price}.`
}

const Products = mongoose.model('Product', productSchema);

module.exports = { Products } 