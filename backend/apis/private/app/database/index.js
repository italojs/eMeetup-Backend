'use strict'

const mongoose = require('mongoose')

/**
 * Models
 * ======
 */


/**
 * Repositories
 * ============
 */


/**
 * Storages
 * ========
 */

/**
 * Constants
 * =========
 */
const DEFAULT_OPTIONS = {
  poolSize: 10,
  keepAlive: 120,
  reconnectTries: 30,
  bufferMaxEntries: 0,
  bufferCommands: false,
  reconnectInterval: 500,
  promiseLibrary: Promise
}

/**
 * Initiates everything related to database usage such as connection, models and
 * repositories.
 * @param  {String} config.url     MongoDB connection string.
 * @param  {Object} config.options MongoDB Client options.
 * @return {Object}                Object containing instantiated repositories.
 */
const factory = (config) => {
  const { url, options } = merge({ options: DEFAULT_OPTIONS }, config)

  const connection = mongoose.createConnection(url, options)

  const models = {
    // ModelName: ModelRequired.factory(connection),
  }

  const repositories = {
    // repository: new Repository(models.ModelName),
  }

  const storages = {
    // storage: new ExamStorage(models.ModelName),
  }

  return { repositories, storages }
}

module.exports = { factory }
