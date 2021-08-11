# steam-players
Node.js package for get Steam player summaries.

<p align="center">
  <img src="https://i.imgur.com/sJWX3Q5.png">
</p>

# Docs
[Documentation](https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries)

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install steam-players
````

# Credentials
### 1. Steam
````
# Account
Create an Steam account on https://store.steampowered.com/.

# API Key
Create an API key on https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey.
````

# Example
```javascript
const Steam = require('steam-players');

const steam = new Steam({
  key: 'STEAM_API_KEY',
});

(async () => {
  try {
    const playerSummaries = await steam.playerSummaries({ steamids: '76561198027639832' });
    console.log(playerSummaries);
  } catch (error) {
    console.error(error);
  }
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

### Acknowledgments
* [FlatIcon](https://www.flaticon.com/)