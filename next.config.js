const  { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'jay',
        mongodb_password: 'msgvHVEuSaj5vCiP',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      }
    }
  }
  return {
    env: {
      mongodb_username: 'jay',
      mongodb_password: 'msgvHVEuSaj5vCiP',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    }
  }
};