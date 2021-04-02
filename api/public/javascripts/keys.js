
var dotenv = require('dotenv');
dotenv.config();

const spotifyKeys = {
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET
}

module.exports = spotifyKeys;