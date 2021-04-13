const { Products } = require("./../models/ProductModel");

const test = async() => {
    const data = {
        name: 'john',
        description: 'ma description',
        price : 10
    }
    const toSave = new Products(data)
    try {
        let req = await toSave.save();
        console.log('Produit sauvé : ', req);
    } catch (e) {
        console.log(e);
    }
}
const test2 = async() => {
    let getAll = await Products.find()
    console.log('all products', getAll);
    return getAll;
}

module.exports = {
    test,
    test2
}
