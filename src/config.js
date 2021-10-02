const convict = require('convict');
const convictFormatWithValidator = require('convict-format-with-validator');
// Add all formats
convict.addFormats(convictFormatWithValidator);

// Define a schema
let config = convict({
	env: {
		doc: 'The application environment.',
		format: ['production', 'development', 'test', 'demo', 'ci', 'local'],
		default: 'local',
		env: 'NODE_ENV',
		arg: 'env'
	},
	ip: {
		doc: 'The IP address to bind.',
		format: 'ipaddress',
		default: '0.0.0.0',
		env: 'IP_ADDRESS'
	},
	logLevel: {
		doc: 'Logging level for this service',
		format: '*',
		default: 'info',
		env: 'LOG_LEVEL',
		arg: 'log-level'
	},
	port: {
		doc: 'The port to bind.',
		format: 'port',
		default: 3000,
		env: 'PORT',
		arg: 'port'
	}
});


module.exports = config;