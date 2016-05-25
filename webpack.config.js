// -- import some fs util libs
var path = require('path');

module.exports = {
	// entry point
	entry: 'lzLoadr.js',
	context: path.join(__dirname, 'src'),

	// output definition
	output: {
		filename: 'lzLoadr.js',
		path: path.join(__dirname, 'lib'),

		// tell webpack to create a UMD library
		library: 'lzLoadr',
		libraryTarget: 'umd'
	},

	// loaders definitions
	module: {
		loaders: [
			// transpiles ES6 into vanilla ES5 code
			{
				test: /\.jsx?$/,
				loader: 'babel',
        query: { stage: 1  },
				exclude: /node_modules/
			}
	  ]
	},

	// resolver definitions
	resolve: {
		root: path.join(__dirname, 'src'),
		modulesDirectories: ['node_modules']
	}
}
