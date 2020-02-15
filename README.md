# steam-players
Node package for get Steam player summaries.

<p align="center">
  <img src="https://i.imgur.com/sJWX3Q5.png">
</p>

[Documentation](https://partner.steamgames.com/doc/webapi/ISteamUser#GetPlayerSummaries)

### Installation
````
npm install steam-players
````

### Example
```javascript
const Steam = require('steam-players');

const steam = new Steam({
  key: 'STEAM_API_KEY',
});

steam.playerSummaries({
  steamids: '76561198027639832',
}).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### Response example
````json
[
  {
    steamid: '76561198027639832',
    communityvisibilitystate: 3,
    profilestate: 1,
    personaname: 'xxgicoxx',
    commentpermission: 1,
    profileurl: 'https://steamcommunity.com/id/xxgicoxx/',
    avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8d/8dcf25da8dfc3f82e7ec7d1fbdf69228b63e1e3f.jpg',
    avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8d/8dcf25da8dfc3f82e7ec7d1fbdf69228b63e1e3f_medium.jpg',
    avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8d/8dcf25da8dfc3f82e7ec7d1fbdf69228b63e1e3f_full.jpg',
    lastlogoff: 1581508917,
    personastate: 0,
    realname: 'Giovani Henrique',
    primaryclanid: '103582791429521408',
    timecreated: 1278959445,
    personastateflags: 0,
    loccountrycode: 'BR',
    locstatecode: '18',
    loccityid: 8458
  }
]
````

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)

### Acknowledgments
* [FlatIcon](https://www.flaticon.com/) - Icon