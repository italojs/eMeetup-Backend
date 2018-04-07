'use strict'

const routes = require('./routes')
const database = require('./database')
const appfy = require('@mantris/appfy')


/**
 * Application setup.
 * @param  {Object} api                 Express instance.
 * @param  {Object} options.config      Application configs.
 */
const setup = (api, { config }) => {
  const { repositories, storages } = database.factory(config.mongodb)
 
  // Routes
}

/**
 * Application factory.
 * @type {Function}
 */
const factory = appfy(setup)

module.exports = { factory }
