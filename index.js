const { Axios } = require('axios');
const FormData = require('form-data');
const { ResponseStatusChecker, File } = require('./core/utils.js');
class API extends Axios {
    /**
     * 
     * @param {*} apikey 
     */
    constructor(apikey) {
        super({baseURL: 'https://antei.codes', headers:{Authorization:apikey}, validateStatus: ()=> true});
        this.apikey = apikey;
    }
    /**
     * 
     * @param {*} query 
     * @returns 
     */
    async tafsirmimpi(query) {
        return JSON.parse(ResponseStatusChecker(await this.get('/tafsirmimpi', {params: {q:query}})).data);
    }

    /**
     * 
     * @param {*} text 
     * @returns 
     */
    async blackpink(text) {
        return JSON.parse(ResponseStatusChecker(await this.get('/blackpink', {params: {text: text}})).data);
    }
    /**
     * 
     * @param {*} name 
     * @param {*} image 
     * @param {*} quality 
     * @returns 
     */
    async Twibbonizze(name, image, quality=100) {
        let data = new FormData();
        const option = {};
        data.append('image', await File(image), 'image.jpeg')
        return JSON.parse(ResponseStatusChecker(await this.post('/twibon', data, {headers: {'Content-Type': `multipart/form-data; boundary=${data._boundary}`, Authorization:this.apikey}, params:{name:name, quality:quality}})).data)
    }
    
    /**
     * 
     * @param {*} n1 
     * @param {*} n2 
     * @returns 
     */
    async jodoh(n1, n2) {
        return JSON.parse(ResponseStatusChecker(await this.get('/jodoh', {params: {n1: n1,n2: n2}})).data)
    }

    /**
     * 
     * @param {*} image 
     * @returns 
     */
    async Removebg(image) {
        const data = new FormData()
        data.append('image', image, 'image.jpg')
        return JSON.parse(ResponseStatusChecker(await this.post('/removebg', data, {headers:{'Content-Type': `multipart/form-data; boundary=${data._boundary}`, Authorization:this.apikey}}))).data
    }
}
module.exports = { API }

// const api = new API('apikey');
// api.Twibbonizze('twibbonkbi','./image.jpeg', 1).then(console.log)
