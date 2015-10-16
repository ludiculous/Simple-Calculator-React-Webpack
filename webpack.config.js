module.exports ={
	//what the start is
	entry: "./client.js",
	//where do the files go
	output: {
		filename: "public/bundle.js"
	},
	
	module:{
		loaders:[
			{
					exclude: /(node_modules|app-server.js)/,
					loader: 'babel'
			}
		]	
	}
};