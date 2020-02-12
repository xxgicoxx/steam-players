const request = require('request-promise-native');

const { apiConfig } = require('../configs');

class SteamUserService {
  constructor(config) {
    this.config = config;
    this.format = 'json';
  }

  async getPlayerSummaries(options = {}) {
    try {
      const qs = Object.assign(options, this.config);
      const url = `${apiConfig.url}${apiConfig.ISteamUser.GetPlayerSummaries}`;

      const players = await request.get({ url, qs });

      return JSON.parse(players).response.players;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = SteamUserService;
