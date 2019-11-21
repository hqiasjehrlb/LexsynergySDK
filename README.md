# LexsynergySDK
Lexsynergy API SDK

to implement API methods with node js

## Usage
to include
```javascript
const LexsynergySDK = require('lexsynergysdk');
```
construct an instance
```javascript
const LexsynergySDK = require('lexsynergysdk');
/**
 * @param0 {string} api url
 *   url should include api version
 *   this SDK is developed base on API version 1.6
 */
const lexsynergy = new LexsynergySDK('https://api.lexsynergy.com/1.6');
```

call method
```javascript
/**
 * param0 {string} resource path
 * param1 {string} http method
 * param2 {string} api key
 * param3 {string} api secret
 * param4 {string} data (optional)
 */
lexsynergy.request('/path/to/resource', 'GET', api_key, api_secret, data)
  .then(rslt => {
    // this rslt is http response body
    console.log(rslt);
  })
```

## Dependencies
* axios
* lodash
* uuid
* qs
