// Simple Example route to http://localhost:PORT/api/private
exports.getPrivateData = (req, res, next)=> {
    res.status(200).json({
        success: true,
        data: "Vous avez accès à cette route privée car vous avez un Bearer token valide dans le Header.Authorization de votre requête et que vous êtes admin."
    })
}

// To be able to reach this route, you'll need to get a valid JWT token from the register or login functions
// Then you'll need to send it as a Bearer <token> in the Authorization Headers
// You also need to be an admin.
