module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "jquery": true,
    "mocha": true
  },
  "plugins": [
    "import",
    "webdriverio"
  ],
  "rules": {
    "max-len": "off",
    "no-plusplus": "off",
  },
  "globals": {
    "browser": "readonly"
  }
};