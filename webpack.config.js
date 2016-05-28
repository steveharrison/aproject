module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				include: [
					__dirname
				],
				test: /\.js$/,
				query: {
					presets: ['es2015']
				}
			}
		]
	}
}