const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	outputDir: '../www',
	productionSourceMap: false,
	devServer: {
		host: '0.0.0.0',
		port: 3000,
		proxy: {
			'/socket.io': {
				target: 'http://localhost:3001',
				ws: true,
				changeOrigin: true,
			},
			'/api/v1': {
				target: 'http://localhost:3001',
				ws: true,
				changeOrigin: true,
			},
		},
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/assets/scss/variables.scss";`,
			},
		},
	},
});
