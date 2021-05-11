module.exports = app => {
    app.use('/api/auth', require('./Auth.routes'));
    app.use('/api/users', require('./Users.routes'));
    app.use('/api/private', require('./PrivateExample.routes')); // Basics of private
    app.use('/api/formations', require('./Formations.routes'));
    app.use('/api/modules', require('./Modules.routes'));
    app.use('/api/composants', require('./Composants.routes'));
    app.use('/api/admin/uploadfiles', require('./Uploads.routes'));
}