const { SteamUserService } = require('../services');

class SteamController {
  /**
    * @param {Object} config configs
    * @param {string} config.key steam key
    */
  constructor(config) {
    this._service = new SteamUserService(config);
  }

  /**
    * /ISteamUser/GetPlayerSummaries/v0002/
    *
    * @param {Object} options request params
    * @param {string[]} options.steamids steam ids
    * @returns {Promise} Promise
    */
  playerSummaries(options) {
    return this._service.getPlayerSummaries(options);
  }
}

module.exports = SteamController;
