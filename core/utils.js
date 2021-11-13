const axios = require('axios');
const fs = require('fs')
const {ParameterIsEmpty, Limit, AccessDenied, AuthorizationInvalid, AuthorizationEmpty, Parameter, ProblemNotRecognized} = require('./Exception.js');

/**
 * 
 * @param {*} axios_response 
 * @returns 
 */
function ResponseStatusChecker(axios_response) {
    const {status} = axios_response;
    switch(status) {
        case 400:
            throw new ParameterIsEmpty(JSON.parse(axios_response.data).msg);
        case 402:
            throw new Limit(JSON.parse(axios_response.data).msg);
        case 403:
            throw new AccessDenied(JSON.parse(axios_response.data).msg);
        case 405:
            throw new AuthorizationInvalid(JSON.parse(axios_response.data).msg);
        case 406:
            throw new ProblemNotRecognized(JSON.parse(axios_response.data).msg);
        case 407:
            throw new AuthorizationEmpty(JSON.parse(axios_response.data).msg)
        case 409:
            throw new Parameter(JSON.parse(axios_response.data).msg);

    }
    return axios_response
}

/**
 * 
 * @param {*} fl 
 * @returns 
 */
async function File(fl) {
    switch (typeof fl) {
        case 'string':
            if(/https?:\/\//.exec(fl)) {
                return (await axios.get(fl, { responseType: 'stream' })).data;
            }else{
                return fs.createReadStream(fl);
            }
        case 'object':
            return fl
    }
    throw new Error('data type not recognized');
}
module.exports = { ResponseStatusChecker ,File }