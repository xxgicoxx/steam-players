const { constants, request } = require('../utils');

const { apiConfig } = require('../configs');

class SteamUserService {
  constructor(config) {
    this.config = config;
    this.config.format = constants.FORMAT_JSON;
  }

  async getPlayerSummaries(options) {
    try {
      const qs = { ...this.config, ...options };
      const players = await request({ url: `${apiConfig.url}${apiConfig.ISteamUser.GetPlayerSummaries}`, qs });

      return players.response.players;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = SteamUserService;
