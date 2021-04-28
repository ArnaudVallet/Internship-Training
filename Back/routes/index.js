module.exports = app => {
    app.use('/api/products', require('./Products.routes')); // = var products = require('./routes/ProductsRouter')
    app.use('/api/auth', require('./Auth.routes'));
    app.use('/api/private', require('./PrivateExample.routes')); // Basics of private
    app.use('/api/peoples', require('./People.routes'));
    app.use('/api/formations', require('./Formations.routes'));
    app.use('/api/modules', require('./Modules.routes'));
}