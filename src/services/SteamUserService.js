const request = require('request-promise-native');

const { apiConfig } = require('../configs');

class SteamUserService {
  constructor(config) {
    this._config = config;
  }

  async _getPlayerSummaries(options = {}) {
    try {
      this._config.format = 'json';

      const qs = Object.assign(options, this._config);
      const url = `${apiConfig.url}${apiConfig.ISteamUser.GetPlayerSummaries}`;
      const players = await request.get({ url, qs });

      return JSON.parse(players).response.players;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = SteamUserService;
