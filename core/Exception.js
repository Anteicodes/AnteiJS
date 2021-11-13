class ERROR extends Error {
    /**
     * 
     * @param {*} message 
     */
    constructor(message) {
        super()
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor)
    }
}
class AuthorizationEmpty extends ERROR {
    /**
     * 
     * @param {*} message 
     */
    constructor(message){
        super('Authorization is empty')
        this.data = { message }
    }
}

class Limit extends ERROR {
    /**
     * 
     * @param {*} message 
     */
    constructor(message) {
        super('Limit Is Not Enough')
        this.data = { message }
    }
}

class AccessDenied extends ERROR {
    /**
     * 
     * @param {*} message 
     */
    constructor(message) {
        super('Access Denied')
        this.data = { message }
    }
}

class ParameterIsEmpty extends ERROR {
    /**
     * 
     * @param {*} message 
     */
    constructor(message) {
        super('Authorization Not Valid')
        this.data = { message }
    }
}
class Parameter extends ERROR {
    /**
     * 
     * @param {*} message 
     */
    constructor(message) {
        super('Invalid Parameter')
        this.data = { message }
    }
}

class ProblemNotRecognized extends ERROR {
    /**
     * 
     * @param {*} message 
     */
    constructor(message) {
        super('Problem Not Recognized')
        this.data = { message }
    }
}

class AuthorizationInvalid extends ERROR {
    /**
     * 
     * @param {*} message 
     */
    constructor(message) {
        super('Authorization Not Valid')
        this.data = { message }
    }
}
module.exports = { AuthorizationEmpty, ParameterIsEmpty, Limit, AccessDenied, AuthorizationInvalid, Parameter, ProblemNotRecognized}