const API = require('./API');

module.exports = class Lexsynergy extends API {
  /**
   * @param {string} url ex: https://{hostname}/{version}
   * @param {string} realm default: api
   */
  constructor (url, realm) {
    super(url, realm);
  }

  get getTlds () { return getTlds(this); }
  get getTldsPrices () { return getTldsPrices(this); }
  get getTldsInfo () { return getTldsInfo(this); }

  get getAccountBalance () { return getAccountBalance(this); }

  get getAccountFolders () { return getAccountFolders(this); }
  get postAccountFoldersCreate () { return postAccountFoldersCreate(this); }
  get putAccountFoldersCreate () { return putAccountFoldersCreate(this); }
  get deleteAccountFoldersDelete () { return deleteAccountFoldersDelete(this); }

  get getHandles () { return getHandles(this); }
  get getHandlesInfo () { return getHandlesInfo(this); }
  get postHandlesCreate () { return postHandlesCreate(this); }
  get putHandlesCreate () { return putHandlesCreate(this); }
  get deleteHandlesDelete () { return deleteHandlesDelete(this); }


  get getDomainsInfo () { return getDomainsInfo(this); }
  get getDomainsAuthCode () { return getDomainsAuthCode(this); }
  get putDomainsUpdate () { return putDomainsUpdate(this); }
  get putDomainsRenew () { return putDomainsRenew(this); }
  get getDomainsCheck () { return getDomainsCheck(this); }
  get getDomainsClaims () { return getDomainsClaims(this); }
  get postDomainsCreate () { return postDomainsCreate(this); }

  get getDomainsTransfers () { return getDomainsTransfers(this); }
  get getDomainsTransfersInfo () { return getDomainsTransfersInfo(this); }
  get postDomainsTransfersCreate () { return postDomainsTransfersCreate(this); }

  get getDns () { return getDns(this); }
  get postDnsCreate () { return postDnsCreate(this); }
  get deleteDnsDelete () { return deleteDnsDelete(this); }

  get getMessages () { return getMessages(this); }
  get deleteMessages () { return deleteMessages(this); }
};

/**************/
/* prototypes */
/**************/

/**
 * @param {API} self 
 */
function getTlds (self) {
  return f;
  /**
   * Get a list of available TLDs
   * @param {string} api_key 
   * @param {string} api_secret 
   */
  async function f (api_key, api_secret) {
    /**
     * @typedef GETTlds
     * @property {object} data
     * @property {string[]} data.tlds
     */
    /**
     * @type {BaseResp & GETTlds}
     */
    const resp = await self.request('/tlds', 'GET', api_key, api_secret, {});
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getTldsPrices (self) {
  return f;
  /**
   * Get a list of TLD prices
   * @param {string} api_key 
   * @param {string} api_secret 
   */
  async function f (api_key, api_secret) {
    /**
     * @typedef GETTldsPrices
     * @property {object} data
     * @property {string} currency
     * @property {Object<string,PriceObject>} prices
     */
    /**
     * @type {BaseResp & GETTldsPrices}
     */
    const resp = await self.request('/tlds/prices', 'GET', api_key, api_secret, {});
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getTldsInfo (self) {
  return f;
  /**
   * Get TLD info
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name TLD name
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef TldInfoExt
     * @property {boolean} transfer_requires_auth_code
     * @property {string} country
     * @property {string} region
     * @property {Array} requires_local_presence
     * @property {boolean} local_presence_type
     */
    /**
     * @type {BaseResp & { data: PriceObject & TldInfoExt }}
     */
    const resp = await self.request('/tlds/info', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getAccountBalance (self) {
  return f;
  /**
   * Get account balance
   * This command fetches your real-time balance information
   * @param {string} api_key 
   * @param {string} api_secret 
   */
  async function f (api_key, api_secret) {
    /**
     * @typedef GETAccountBalance
     * @property {object} data
     * @property {string} data.currency
     * @property {number} data.balance
     * @property {number} data.unpaid
     * @property {number} data.credit_limit
     * @property {number} data.available_funds
     */
    /**
     * @type {BaseResp & GETAccountBalance}
     */
    const resp = await self.request('/account/balance', 'GET', api_key, api_secret, {});
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getAccountFolders (self) {
  return f;
  /**
   * List folders
   * NOTE: If the user is restricted to a subset of folders only these will be returned.
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {Pagination} data 
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETAccountFolders
     * @property {number} limit
     * @property {number} page
     * @property {number} count
     * @property {string[]} folders
     */
    /**
     * @type {BaseResp & GETAccountFolders}
     */
    const resp = await self.request('/account/folders', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function postAccountFoldersCreate (self) {
  return f;
  /**
   * Create folder
   * NOTE: If the user is restricted to a subset of folders they will not be able to use this command.
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name The new folder's name
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef POSTAccountFoldersCreate
     * @property {{ folder: string }} data
     */
    /**
     * @type {BaseResp & POSTAccountFoldersCreate}
     */
    const resp = await self.request('/account/folders/create', 'POST', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function putAccountFoldersCreate (self) {
  return f;
  /**
   * Update folder
   * NOTE: If the user is restricted to a subset of folders they will not be able to use this command.
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data
   * @param {string} data.current The current folder's name
   * @param {string} data.name The folder's new name
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef PUTAccountFoldersCreate
     * @property {{ folder: string }} data
     */
    /**
     * @type {BaseResp & PUTAccountFoldersCreate}
     */
    const resp = await self.request('/account/folders/create', 'PUT', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function deleteAccountFoldersDelete (self) {
  return f;
  /**
   * Delete folder
   * NOTE: If the user is restricted to a subset of folders they will not be able to use this command.
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name The current folder's name
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef DELETEAccountFoldersDelete
     * @property {{ folder: string }} data
     */
    /**
     * @type {BaseResp & DELETEAccountFoldersDelete}
     */
    const resp = await self.request('/account/folders/delete', 'DELETE', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getHandles (self) {
  return f;
  /**
   * List handles
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {Pagination} data 
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETHandles
     * @property {object} data
     * @property {number} data.limit
     * @property {number} data.page
     * @property {number} data.count
     * @property {string[]} data.handles
     */
    /**
     * @type {BaseResp & GETHandles}
     */
    const resp = await self.request('/handles', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getHandlesInfo (self) {
  return f;
  /**
   * Get a handle
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name The name of the handle you wish to retrieve
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETHandlesInfo
     * @property {HandlesInfo} data
     */
    /**
     * @type {BaseResp & GETHandlesInfo}
     */
    const resp = await self.request('/handles/info', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function postHandlesCreate (self) {
  return f;
  /**
   * @typedef HandlesCreateExt
   * @property {string} name Handle name
   */
  /**
   * Create a handle
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {HandlesModifyData & HandlesCreateExt} data
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef {POSTHandlesCreate}
     * @property {object} data
     * @property {string} data.handle
     */
    /**
     * @type {BaseResp & POSTHandlesCreate}
     */
    const resp = await self.request('/handles/create', 'POST', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function putHandlesCreate (self) {
  return f;
  /**
   * @typedef HandlesUpdateExt
   * @property {string} current Current handle name
   * @property {string} [name] New handle name, handle must not already exist
   */
  /**
   * Update a handle
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {HandlesModifyData & HandlesUpdateExt} data update data
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef PUTHandlesCreate
     * @property {object} data
     * @property {string} data.handle
     */
    /**
     * @type {BaseResp & PUTHandlesCreate}
     */
    const resp = await self.request('/handles/create', 'PUT', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function deleteHandlesDelete (self) {
  return f;
  /**
   * Delete a handle
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name Current handle name
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef DELETEHandlesDelete
     * @property {object} data
     * @property {string} data.handle
     */
    /**
     * @type {BaseResp & DELETEHandlesDelete}
     */
    const resp = await self.request('/handles/delete', 'DELETE', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getDomainsInfo (self) {
  return f;
  /**
   * Get domain info
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name
   * @param {boolean} [data.deep] true: response full handle info
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETDomainsInfo
     * @property {DomainsInfo} data
     */
    /**
     * @type {BaseResp & GETDomainsInfo}
     */
    const resp = await self.request('/domains/info', 'GET', api_key, api_secret, { deep: false, ...data });
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getDomainsAuthCode (self) {
  return f;
  /**
   * Get domain auth code
   * NOTE: Auth codes expire after a period of time, please consult the expires_at value return to see when your auth code will expire
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name The name of the domain you wish to retrieve an auth code for
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETDomainsAuthCode
     * @property {object} data
     * @property {string} data.name
     * @property {string} data.auth_code
     * @property {string} data.expires_at
     */
    /**
     * @type {BaseResp & GETDomainsAuthCode}
     */
    const resp = await self.request('/domains/auth-code', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function putDomainsUpdate (self) {
  return f;
  /**
   * Update a domain
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {string} name 
   * @param {DomainsModifyData} data 
   */
  async function f (api_key, api_secret, name, data) {
    /**
     * @typedef PUTDomainsUpdate
     * @property {object} data
     * @property {string} data.name
     */
    /**
     * @type {BaseResp & PUTDomainsUpdate}
     */
    const resp = await self.request('/domains/update', 'PUT', api_key, api_secret, { ...data, name });
    return resp;
  }
}

/**
 * @param {API} self 
 */
function putDomainsRenew (self) {
  return f;
  /**
   * Renew a domain
   * This command can also renew domains in bulk, pass { domains: [{ name, years, expires_at }] } as data
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data
   * @param {string} data.name domain name
   * @param {number} data.years
   * @param {string} data.expires_at YYYY-MM-DD
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef {PUTDomainsRenew}
     * @property {object} data
     * @property {string} data.name
     * @property {string} data.expires_at
     */
    /**
     * @type {BaseResp & PUTDomainsRenew}
     */
    const resp = await self.request('/domains/renew', 'PUT', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getDomainsCheck (self) {
  return f;
  /**
   * Check availability of a domain
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {Array<string>} data.name
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETDomainsCheck
     * @property {object} data
     * @property {Object<string,'available'|'taken'>} data.domains
     */
    /**
     * @type {BaseResp & GETDomainsCheck}
     */
    const resp = await self.request('/domains/check', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getDomainsClaims (self) {
  return f;
  /**
   * Check for claims notifcations
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {Array<string>} data.name
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETDomainsClaims
     * @property {object} data
     * @property {Object<string,Notice>} data.notices { "tmch...": { ... } }
     * @property {Object<string,string>} data.domains { "test12345.com": "tmch..." }
     */
    /**
     * @type {BaseResp & GETDomainsClaims}
     */
    const resp = await self.request('/domains/claims', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function postDomainsCreate (self) {
  return f;
  /**
   * @typedef DomainsCreateExt
   * @property {number} years
   * @property {string} [smd]
   * @property {object} [claims] A claims notification acceptance
   * @property {string} claims.noticeID This is taken from the claims check
   * @property {string} [claims.notAfter] datetime. This is taken from the claims check
   * @property {string} claims.acceptedDate datetime. When the user accepted the notice
   */
  /**
   * Register a domain name
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {Array<DomainsModifyData & DomainsCreateExt>} data.domains
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef POSTDomainsCreate
     * @property {object} data
     * @property {Object<string,{ status: string, registered_at: string, expires_at: string }>} data.registered
     * @property {Array} data.failures
     */
    /**
     * @type {BaseResp & POSTDomainsCreate}
     */
    const resp = await self.request('/domains/create', 'POST', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getDomainsTransfers (self) {
  return f;
  /**
   * List of pending transfers
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {Pagination} data 
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETDomainsTransfers
     * @property {object} data
     * @property {number} limit
     * @property {number} page
     * @property {number} count
     * @property {string[]} domains
     */
    /**
     * @type {BaseResp & GETDomainsTransfers}
     */
    const resp = await self.request('/domains/transfers', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getDomainsTransfersInfo (self) {
  return f;
  /**
   * Get transfer info
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name The name of the domain you wish to retrieve
   * @param {boolean} [data.deep] If deep is true you get full handle info embedded in the response otherwise just handle names
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETDomainsTransfersInfo
     * @property {object} data
     * @property {string} data.name
     * @property {'Auto Renew'|'Renew Once'|'Do Not Renew'} data.auto_renew_mode
     * @property {boolean} data.use_lexsynergy_ns
     * @property {string|HandlesInfo} data.registrant_handle
     * @property {string|HandlesInfo} data.admin_handle
     * @property {string|HandlesInfo} data.tech_handle
     * @property {Nameservers[]} data.nameservers 
     */
    /**
     * @type {BaseResp & GETDomainsTransfersInfo}
     */
    const resp = await self.request('/domains/transfers/info', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function postDomainsTransfersCreate (self) {
  return f;
  /**
   * @typedef DomainsTransferExt
   * @property {string} [auth_code]
   * @property {string} [smd]
   * @property {object} [claims] A claims notification acceptance
   * @property {string} claims.noticeID This is taken from the claims check
   * @property {string} [claims.notAfter] datetime. This is taken from the claims check
   * @property {string} claims.acceptedDate datetime. When the user accepted the notice
   */
  /**
   * Transfer a domain name
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data
   * @param {Array<DomainsModifyData & DomainsTransferExt>} data.domains
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef POSTDomainsTransfersCreate
     * @property {object} data
     * @property {Object<string,{ status: string }>} data.queued
     * @property {Array} data.failures
     */
    /**
     * @type {BaseResp & POSTDomainsTransfersCreate}
     */
    const resp = await self.request('/domains/transfers/create', 'POST', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getDns (self) {
  return f;
  /**
   * List DNS records for a specifc domain
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name The name of the domain’s DNS records you wish to retrieve
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef GETDns
     * @property {object} data
     * @property {string} data.name
     * @property {DNSRecord[]} data.records
     */
    /**
     * @type {BaseResp & GETDns}
     */
    const resp = await self.request('/dns', 'GET', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self
 */
function postDnsCreate (self) {
  return f;
  /**
   * Create a DNS record
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name The domain name to add the DNS record to
   * @param {string} data.record The name
   * @param {DNSRecordType} data.type
   * @param {number} [data.ttl]
   * @param {string} data.content
   * @param {number} [data.prio] Only required for records that support priorities
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef POSTDnsCreate
     * @property {object} data
     * @property {string} data.record
     * @property {DNSRecordType} data.type
     * @property {number} data.ttl
     * @property {string} data.content
     * @property {number} data.prio
     */
    /**
     * @type {BaseResp & POSTDnsCreate}
     */
    const resp = await self.request('/dns/create', 'POST', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function deleteDnsDelete (self) {
  return f;
  /**
   * Delete DNS records
   * NOTE: This will delete any record that matches the criteria in the provided parameters.
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.name The domain name to add the DNS record to
   * @param {string} [data.record] The name
   * @param {DNSRecordType} [data.type]
   * @param {number} [data.ttl]
   * @param {string} [data.content]
   * @param {number} [data.prio]
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef DELETEDnsDelete
     * @property {object} data
     * @property {string} data.name
     * @property {DNSRecord[]} data.records
     */
    /**
     * @type {BaseResp & DELETEDnsDelete}
     */
    const resp = await self.request('/dns/delete', 'DELETE', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @param {API} self 
 */
function getMessages (self) {
  return f;
  /**
   * Get next message
   * @param {string} api_key 
   * @param {string} api_secret 
   */
  async function f (api_key, api_secret) {
    /**
     * @typedef GETMessages
     * @property {object} data
     * @property {string} data.event The message event type
     * @property {string} data.id The message ID, used for acknowledging the message
     * @property {string} data.time datetime. The time the message was queued
     * @property {*} data.data Message specifc data
     * @property {number} data.messages Number of messages in the queue, including this one
     */
    /**
     * @type {BaseResp & GETMessages}
     */
    const resp = await self.request('/messages', 'GET', api_key, api_secret, {});
    return resp;
  }
}

/**
 * @param {API} self 
 */
function deleteMessages (self) {
  return f;
  /**
   * Acknowledge message
   * @param {string} api_key 
   * @param {string} api_secret 
   * @param {object} data 
   * @param {string} data.id The message ID to acknowledge
   */
  async function f (api_key, api_secret, data) {
    /**
     * @typedef DELETEMessages
     * @property {{ messages: number }} data
     */
    /**
     * @type {BaseResp & DELETEMessages}
     */
    const resp = await self.request('/messages', 'DELETE', api_key, api_secret, data);
    return resp;
  }
}

/**
 * @typedef {'A'|'AAAA'|'AFSDB'|'CERT'|'CNAME'|'HINFO'|'IPSECKEY'|'KX'|'LOC'|'MR'|'MX'|'NAPTR'|'NS'|'RP'|'SPF'|'SRV'|'SSHFP'|'TXT'} DNSRecordType
 */

/**
 * @typedef Pagination
 * @property {number} [limit] Maximum number of records to return, default and maximum value is 1,000
 * @property {number} [page] Page number to return
 */

/**
 * @typedef BaseResp
 * @property {number} code
 * @property {string} message
 * @property {string} command-id
 */

/**
 * @typedef PriceObject
 * @property {string} registration
 * @property {string} sunrise
 * @property {string} landrush
 * @property {string} renewal
 * @property {string} restore
 * @property {string} transfer
 * @property {string} backorder
 * @property {string} registrant_change
 * @property {string} nameserver_change
 * @property {string} local_presence
 * @property {string[]} registration_years
 * @property {string[]} renewal_years
 */

/**
 * @typedef HandlesInfo
 * @property {string} name
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} middle_name
 * @property {string} company
 * @property {string} company_number
 * @property {string} address_line_1
 * @property {string} address_line_2
 * @property {string} city
 * @property {string} county
 * @property {string} postcode
 * @property {string} telephone
 * @property {string} fax
 * @property {string} email
 * @property {string} country
 */

/**
 * @typedef HandlesModifyData
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} [middle_name]
 * @property {string} [company]
 * @property {string} [company_number]
 * @property {string} address_line_1
 * @property {string} [address_line_2]
 * @property {string} city
 * @property {string} [county]
 * @property {string} [postcode] This is not optional for handles using country code GB or US
 * @property {string} telephone Format +44.2081331319
 * @property {string} [fax] Format +44.2081331319
 * @property {string} email
 * @property {string} country Two letter ISO 3166-1 country code
 */

/**
 * @typedef DomainsInfo
 * @property {string} name domain name
 * @property {string} status Regsitered
 * @property {string} registered_at 2005-05-03T14:59:31+00:00
 * @property {string} expires_at 2005-05-03T14:59:31+00:00
 * @property {'Auto Renew'|'Renew Once'|'Do Not Renew'} auto_renew_mode
 * @property {boolean} use_lexsynergy_ns
 * @property {Array<Nameservers>} nameservers
 * @property {string|HandlesInfo} registrant_handle
 * @property {string|HandlesInfo} admin_handle
 * @property {string|HandlesInfo} tech_handle
 * @property {string|HandlesInfo} pending_registrant_handle
 * @property {string} folder
 */


/**
 * @typedef DomainsModifyData
 * @property {string} name The name of the domain
 * @property {string} [folder]
 * @property {'Auto Renew'|'Renew Once'|'Do Not Renew'} [auto_renew_mode]
 * @property {boolean} [use_lexsynergy_ns]
 * @property {Array<Nameservers>} [nameservers]
 * @property {boolean} [registrant_handle_use_local_presence] Use local presence for handle
 * @property {string|HandlesModifyData} registrant_handle
 * @property {boolean} [admin_handle_use_local_presence] Use local presence for handle
 * @property {string|HandlesModifyData} admin_handle
 * @property {boolean} [tech_handle_use_local_presence] Use local presence for handle
 * @property {string|HandlesModifyData} tech_handle
 */

/**
 * @typedef Nameservers
 * @property {string} name ns name
 * @property {Array<string>} [ips] Array of IPv4 and IPv6 address
 */


/**
 * @typedef Notice
 * @property {string} id
 * @property {string} notBefore
 * @property {string} notAfter
 * @property {Mark[]} marks
 */

/**
 * @typedef Mark
 * @property {string} mark
 * @property {string} jurisdiction
 * @property {string} goodsAndServices
 * @property {Array<{ class: number, description: string }>} classes
 * @property {object} registrant
 * @property {string} registrant.company
 * @property {string[]} registrant.street
 * @property {string} registrant.city
 * @property {string} registrant.postcode
 * @property {string} registrant.country
 */

/**
 * @typedef DNSRecord
 * @property {string} record
 * @property {DNSRecordType} type
 * @property {string} ttl
 * @property {string} content
 * @property {string} prio
 */
