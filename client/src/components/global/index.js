// import AButton from './AButton.vue';
// import AField from './AField.vue';
// import AInput from './AInput.vue';
// import ASpinner from './ASpinner.vue';
// import ADropdown from './ADropdown.vue';

// export default [
//   AButton,
//   AField,
//   ASpinner,
//   AInput,
//   ADropdown
// ];

const add = (app) => {
	const requireComponent = require.context('@/components/global', true, /\.vue$/);
	requireComponent.keys().forEach((fileName) => {
		const componentConfig = requireComponent(fileName);
		const componentName = fileName.replace(/^.*[\\/]/, '').replace(/\.\w+$/, '');
		app.component(componentName, componentConfig.default || componentConfig);
	});
};

export default add;
