var currency = require('./currency.json')

const currencySelector = (countryCode) => {
    const currencyList = currency
    if (countryCode) {
        return currencyList[countryCode]
    }else {
        return {
          countryName: "",
          currencyCode : ""
        }
    }
}

module.exports = currencySelector