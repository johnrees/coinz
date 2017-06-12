require("isomorphic-fetch")

const coinmarketcap = require('coinmarketcap')
const async = require('asyncawait/async')
const await = require('asyncawait/await')

const getPrices = async(function(currency='bitcoin') {
  return await(coinmarketcap.tickerByAsset(currency, { convert: 'eur' }))
})

const coins = ['litecoin', 'bitcoin', 'ethereum', 'ethereum-classic']
coins.map( c => getPrices(c).then(resp => { console.log(resp) }) )
