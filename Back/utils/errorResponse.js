// Custom ErrorResponse class extanding the basic Error one
class ErrorResponse extends Error {
    constructor(message, statusCode){
        // We use the parent constructor on message property
        super(message);
        // Then our own one
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;
