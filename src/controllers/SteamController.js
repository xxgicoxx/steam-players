const SteamService = require('../services/SteamService');

class SteamController {
  /**
    * Steam config.
    * @param {!string} config.key - steam key
    */
  constructor(config) {
    this.config = config;
  }

  /**
    * http://api.steampowered.com
    */
  players() {
    return new SteamService(this.config);
  }
}

module.exports = SteamController;
