const cors = require('cors')
const currencySelector = require('./currency-selector')

// Set `useWhitelist` to `false` if you want to accept all requests.
const config = {
  useWhitelist: false
}

// Define from which origins requests are allowed.
const whitelist = [
  'https://github.com'
];

const corsOptionsWhitelist = function (req, callback) {
  var corsOptions;

  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }

  callback(null, corsOptions);
}

const corsOptions = {
  origin: true
}

function _geolocation(req, res) {
currency = currencySelector(req.headers["x-appengine-country"])
  const data = {
    country_name: currency.countryName || '',
    country_code: req.headers["x-appengine-country"],
    currency_name: currency.currencyName || '',
    currency_code: currency.currencyCode || ''
  }
  res.json(data)
};

exports.geolocation = (req, res) => {
  const corsHandler = config.useWhitelist ? cors(corsOptionsWhitelist) : cors(corsOptions);

  return corsHandler(req, res, function() {
    return _geolocation(req, res);
  });
};