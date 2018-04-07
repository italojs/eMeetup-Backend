'use strict'

const env = require('sugar-env')

module.exports = {
  auth: {
    jwt: {
      issuer: env.get('ISSUER_AUTHORITY_NAME'),
      audience: env.get('ISSUER_AUTHORITY_NAME')
    },
    jwks: {
      uri: env.get('AUTH_JWKS_URI')
    }
  },
  cors: {
    origin: '*',
    methods: [ 'DELETE', 'GET', 'POST', 'PUT' ],
    preflightContinue: false,
    optionsSuccessStatus: 204
  },
  privateApi: {
    url: env.get('PRIVATE_API_URL'),
    timeout: parseInt(env.get('PRIVATE_API_TIMEOUT', 3000))
  },
  exams: {
    amb: {
      url: env.get('EXAMS_AMB_URL'),
      timeout: parseInt(env.get('EXAMS_AMB_TIMEOUT', 3000))
    },
    tuss: {
      url: env.get('EXAMS_TUSS_URL'),
      timeout: parseInt(env.get('EXAMS_TUSS_TIMEOUT', 3000))
    },
    cbhpm: {
      url: env.get('EXAMS_CBHPM_URL'),
      timeout: parseInt(env.get('EXAMS_CBHPM_TIMEOUT', 3000))
    }
  },
  banks: {
    url: env.get('BANKS_URL'),
    timeout: parseInt(env.get('BANKS_TIMEOUT', 3000))
  },
  statesCities: {
    url: env.get('STATES_CITIES_URL'),
    timeout: parseInt(env.get('STATES_CITIES_TIMEOUT', 3000))
  }
}
