const request = require('request-promise-native');

const apiConfig = require('../configs/api');

class SteamService {
  constructor(config) {
    this.config = config;
  }

  /**
    * /ISteamUser/GetPlayerSummaries/v0002/
    *
    * @param {*} steamids
    */
  async getPlayerSummaries(steamids) {
    try {
      const qs = { steamids, key: this.config.key };
      const url = `${apiConfig.url}${apiConfig.users.summaries}`;

      const players = await request.get({ url, qs });

      return JSON.parse(players).response.players;
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = SteamService;
