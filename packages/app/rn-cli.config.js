const projectRoot = __dirname;

const metroConfigHelper = require('react-native-monorepo-helper').metroConfigHelper;

module.exports = metroConfigHelper(projectRoot)
	.typeScript(true)
	.watchFolder('../common', './node_modules/@wow/common')
	.defaultConfig({
		// Documentation: https://facebook.github.io/metro/docs/en/configuration
		port: 9091
	})
	.generate();
