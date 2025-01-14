const util = require('util'),
      defaults = require('../defaults'),
      command_utils = require('./command-utils');

var descriptor = defaults.defaultDescriptor({
  environment: {
    name: 'Environment',
    shortOption: 'e',
    required: true,
    prompt: true
  },
  targetServerName: {
    name: 'Target Server Name',
    required: true,
    prompt: true
  }
});

module.exports.descriptor = descriptor;

module.exports.run = function(opts, cb) {
  if (opts.debug) {
    console.log('deleteTargetServer: %j', opts);
  }
  let uri = util.format('%s/v1/o/%s/e/%s/targetservers/%s',
                        opts.baseuri, opts.organization, opts.environment,opts.targetServerName);
  let requestOptions = {
        uri,
        method:'DELETE',
        json:true
      };
  command_utils.run('deleteTargetServer', opts, requestOptions, cb);
};
