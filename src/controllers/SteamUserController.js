const { SteamUserService } = require('../services');

class SteamController {
  /**
   * @param {Object} config Configs
   * @param {string} config.key Steam key
   */
  constructor(config) {
    this._config = config;

    this._service = new SteamUserService(this._config);
  }

  /**
   * /ISteamUser/GetPlayerSummaries/v0002/
   *
   * @see https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries
   * @param {Object} options Query parameters
   * @param {string[]} options.steamids Steam ids
   *
   * @returns {Promise} Promise
   */
  playerSummaries(options) {
    return this._service.getPlayerSummaries(options);
  }
}

module.exports = SteamController;
