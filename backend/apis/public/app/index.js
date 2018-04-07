'use strict'

const cors = require('cors')
const routes = require('./routes')
const appfy = require('@mantris/appfy')


/**
 * Application setup.
 * @param {Object} api                 Express instance.
 * @param {Object} options.config      Application configs.
 * @param {String} options.environment Environment name.
 */
const factory = appfy((api, { config, environment }) => {
  // const auth = appfy.auth.factory(config.auth)

  api.use(cors(config.cors))

  // routes
})

module.exports = { factory }
