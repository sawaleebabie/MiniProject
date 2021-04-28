
const LOCAL_URL = 'http://localhost:8080/api';
const PROD_URL = 'https://production.werapun.com/api';

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
