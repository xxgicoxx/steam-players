const fetch = require('node-fetch');

const { apiConfig } = require('../configs');

class SteamUserService {
  constructor(config) {
    this._config = config;
    this._config.format = 'json';
  }

  async _getPlayerSummaries(options = {}) {
    try {
      const queryString = Object.assign(options, this._config);
      const params = new URLSearchParams();
      Object.keys(queryString).forEach((key) => params.append(key, queryString[key]));
      const url = `${apiConfig.url}${apiConfig.ISteamUser.GetPlayerSummaries}`;

      const players = await fetch(`${url}?${params}`);

      return (await players.json()).response.players;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = SteamUserService;
