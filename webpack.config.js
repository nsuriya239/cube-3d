const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	/** "target"
	 * setting "node" as target app (server side), and setting it as "web" is
	 * for browser (client side). Default is "web"
	 */
	target: "web",
	devServer: {
		/** "port"
		 * port of dev server
		 */
		port: "5500",
		/** "static"
		 * This property tells Webpack what static file it should serve
		 */
		static: ["./public"],
		/** "open"
		 * opens the browser after server is successfully started
		 */
		open: {
			app: {
				name: "Google Chrome",
			},
		},
		/** "hot"
		 * enabling and disabling HMR. takes "true", "false" and "only".
		 * "only" is used if enable Hot Module Replacement without page
		 * refresh as a fallback in case of build failures
		 */
		hot: true,
		/** "liveReload"
		 * disable live reload on the browser. "hot" must be set to false for this to work
		 */
		liveReload: true,
	},
	resolve: {
		/** "extensions"
		 * If multiple files share the same name but have different extensions, webpack will
		 * resolve the one with the extension listed first in the array and skip the rest.
		 * This is what enables users to leave off the extension when importing
		 */
		extensions: [".js", ".jsx", ".json"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "assets/images/",
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
		}),
	],
};
