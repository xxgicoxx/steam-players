const fetch = require('node-fetch');

/**
 * Request URL
 *
 * @param {Object} options Options
 * @param {string} options.url URL
 * @param {Object} options.qs Query string
 * @param {string} [options.method = 'GET'] Method
 * @param {string} [options.type = 'json'] Response type
 */
async function request(options = {}) {
  const params = new URLSearchParams();
  Object.keys(options.qs || {}).forEach((key) => params.append(key, options.qs[key]));

  const result = await fetch(`${options.url}?${params}`, { method: options.method || 'GET' });

  return options.type === 'json' || options.type == null ? result.json() : result.text();
}

module.exports = request;
