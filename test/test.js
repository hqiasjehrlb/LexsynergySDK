const LexsynergySDK = require('../index');

const url = 'https://api.lexsynergy.com/1.6';
const {
  api_key,
  api_secret
} = require(`${__dirname}/keys.json`);

const lexsynergy = new LexsynergySDK(url);

lexsynergy.getAccountBalance(api_key, api_secret)
  .then(rslt => {
    console.log(rslt);
  });