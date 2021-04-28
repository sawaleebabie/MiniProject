
const LOCAL_URL = 'http://localhost:8080/';
const PROD_URL = 'https://secure-depths-51132.herokuapp.com';

console.log('node env', process.env.NODE_ENV);

const common = {
    PORT: 8080 
}

const development = {
    ...common, 
    URL: LOCAL_URL,  
}

const production = {
    ...common, 
    URL: PROD_URL, 
}

const config = process.env.NODE_ENV === 'production' ? production : development;

module.exports = config;
