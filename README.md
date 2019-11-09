# LexsynergySDK
Lexsynergy API SDK

to implement API methods with node js

## Usage
to include
```
const LexsynergySDK = require('./index.js');
```
construct an instance
```
/**
 * need to pass the api url as argument
 * url should include api version
 * this SDK is developed base on API version 1.6
 */
const lexsynergy = new LexsynergySDK('https://api.lexsynergy.com/1.6');
```
to call API
```
/**
 * prototypes are naming by rule <http method><ResourcePath>
 * for example:
 *   GET /domains/info -> getDomainsInfo
 *   POST /handles/create -> postHandlesCreate
 * more info see JSDoc in index.js or official document
 */
lexsynergy.getAccountBalance(api_key, api_secret)
  .then(rslt => {
    // this rslt is http response body
    console.log(rslt);
  });
```
to call API not implement in this SDK
```
/**
 * param0 resource path
 * param1 http method
 * param2 api key
 * param3 api secret
 * param4 data (optional)
 */
lexsynergy.request('/path/to/resource', 'GET', api_key, api_secret, data)
  .then(rslt => {
    // this rslt is http response body
    console.log(rslt);
  })
```

## dependencies
* axios
* lodash
* uuid
* qs

英文不好, 請笑納

簡單來說就是將document中的所有方法進行實作, 並將輸入輸出參數都以JSDoc做紀錄, 搭配vscode提示, 可以簡單快速介接Lexsyncergy的API
