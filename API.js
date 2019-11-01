const { v4: genNonce } = require('uuid');
const crypto = require('crypto');
const axios = require('axios');
const qs = require('qs');
const _ = require('lodash');

module.exports = class API {
  constructor (url, realm) {
    const _realm = realm ? `${realm}` : 'api';
    Object.defineProperties(this, {
      _url: { get () { return `${url}`.replace(/\/$/, ''); } },
      _realm: { get () { return _realm; } }
    });
  }

  get request () { return doRequestMethod(this); }
}

class LexsynergyError extends Error {
  constructor (error) {
    super (error);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    const apiResp = _.get(error, ['response', 'data']);
    if (apiResp) {
      this.data = apiResp;
      console.error('LexsynergyAPIResponseError:', JSON.stringify(apiResp));
    }
    const api_message = _.get(error, ['response', 'data', 'message']);
    const api_code = parseInt(_.get(error, ['response', 'data', 'code']), 10);
    if (api_code) {
      this.code = api_code;
    } else {
      this.code = 500;
    }
    if (api_message) {
      this.message = `${api_message}`;
    }
  }
}

/**
 * @param {{ _url: string, _realm: string }} self 
 */
function doRequestMethod (self) {
  const { _url, _realm } = self;
  return f;
  /**
   * @param {string} path 
   * @param {string} method 
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {*} data 
   */
  async function f (path, method, api_key, api_secret, data) {
    try {
      const resource = /\.json$/i.test(path) ? `${path}` : `${path}.json`;
      const respData = await doRequest([_url, resource].join(''), method, api_key, api_secret, data, _realm);
      const code = _.get(respData, ['code']);
      if (code !== 200) {
        throw { response: { data: respData } };
      }
      return respData;  
    } catch (err) {
      throw new LexsynergyError(err);
    }
  }
}

function genTimestamp () {
  return Math.floor(Date.now() / 1000);
}

function genAuthorization (realm, api_key, api_secret, method, url, req_body) {
  const nonce = genNonce();
  const timestamp = genTimestamp();
  const signature = crypto.createHmac('sha256', `${api_secret}`)
    .update([
      realm, '\n',
      api_key, '\n',
      nonce, '\n',
      timestamp, '\n',
      `${method}`.toUpperCase(), '\n',
      url, '\n',
      JSON.stringify(req_body), '\n'
    ].join(''))
    .digest('base64');
  const auth = qs.stringify({
    realm,
    key: api_key,
    nonce,
    timestamp,
    signature
  });
  return ['lexsynergy-http-hmac', auth].join(' ');
}

async function doRequest (url, method, api_key, api_secret, data, realm) {
  const resp = await axios({
    url: `${url}`,
    method: `${method}`.toUpperCase(),
    headers: {
      'Authorization': genAuthorization(realm, api_key, api_secret, method, url, data),
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  });
  return resp.data;
}
