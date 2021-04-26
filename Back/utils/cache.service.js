const NodeCache = require('node-cache');

class Cache {

    constructor() {
        this.cache = new NodeCache({
            
        })
    }

    setToken(keys, token) {
        this.cache.set(keys, token, 10);
    }

}

const tokens = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODFiYmE4YTE2ZjE2MzY2Y2ZjNDdkNCIsImlhdCI6MTYxOTExNDkyMCwiZXhwIjoxNjE5MTE1NTIwfQ.ofadCHrPtwInxTeeqFnATW3oicylH3z7nXji8TUaFL0',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODFiYmE4YTE2ZjE2MzY2Y2ZjNDdkNCIsImlhdCI6MTYxOTE4MDIzNiwiZXhwIjoxNjE5MTgwODM2fQ.3UI5Tx_igXS2BD7xZLh64ccjJ4T0V_6eFNEURtf-n24',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODFiYmE4YTE2ZjE2MzY2Y2ZjNDdkNCIsImlhdCI6MTYxOTE4MDI0NiwiZXhwIjoxNjE5MTgwODQ2fQ.w0Jg2EvjZE05vxiEZVnekHbeP9NHrtV_V_spXRXHhas'
]

const TokenCache = new Cache();
TokenCache.setToken('6081bba8a16f16366cfc47d4', tokens)

// console.log(Date.now());
// console.log(Math.round(new Date() / 1000));
// console.log(new Date() / 1000 | 0);














myCache.set( key, val, [ ttl ] )

key('6081bba8a16f16366cfc47d4') : { token: [
    'ordi perso',
    'portable'
] }















