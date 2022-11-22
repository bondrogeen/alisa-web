const add = (app) => {
	const requireComponent = require.context('@/components/global', true, /\.vue$/);
	requireComponent.keys().forEach((fileName) => {
		const componentConfig = requireComponent(fileName);
		const componentName = fileName.replace(/^.*[\\/]/, '').replace(/\.\w+$/, '');
		app.component(componentName, componentConfig.default || componentConfig);
	});
};

export default add;
