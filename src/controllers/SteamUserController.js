const { SteamUserService } = require('../services');

class SteamController {
  /**
    * Steam config
    *
    * @param {!Object} config configs
    * @param {!string} config.key steam key
    */
  constructor(config = {}) {
    this._steamUserService = new SteamUserService(config);
  }

  /**
    * /ISteamUser/GetPlayerSummaries/v0002/
    *
    * @param {!Object} options request params
    * @param {!string[]} options.steamids steam ids
    * @returns {Promise} return Promise
    */
  playerSummaries(options = {}) {
    this._steamUserService._getPlayerSummaries(options);
  }
}

module.exports = SteamController;
