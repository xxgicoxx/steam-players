const { SteamUserService } = require('../services');

class SteamController {
  /**
    * Steam config.
    * @param {!string} config.key - steam key
    */
  constructor(config) {
    this.config = config;
  }

  /**
    * /ISteamUser/GetPlayerSummaries/v0002/
    *
    * @param {Object} options
    */
  playerSummaries(options) {
    const steamUserService = new SteamUserService(this.config);
    return steamUserService.getPlayerSummaries(options);
  }
}

module.exports = SteamController;
