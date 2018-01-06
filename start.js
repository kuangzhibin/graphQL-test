// npm install babel-core babel-polyfill babel-preset-latest-node babel-preset-stage-3 --save-dev

require('babel-core/register')({
  'presets': [
    'stage-3',
    ["latest-node", {"target": "current"}]
  ]
})

require('babel-polyfill')
require('./app')
