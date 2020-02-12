# steam-players
Node package for get Steam player summaries.

[Documentation](https://developer.valvesoftware.com/wiki/Steam_Web_API#GetPlayerSummaries_.28v0002.29)

### Installation
````
npm install steam-players
````

### Example
```javascript
const Steam = require('steam-players');

const steam = new Steam({
  key: 'STEAM_KEY', // https://steamcommunity.com/dev/apikey
});

steam.playerSummaries('PLAYER_STEAM_ID').then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

```

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)