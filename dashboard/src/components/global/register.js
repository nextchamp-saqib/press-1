import {
	Button,
	Alert,
	Badge,
	FeatherIcon,
	Card,
	LoadingIndicator,
	LoadingText,
	Dialog,
	SuccessMessage,
	Spinner,
	Link,
	Input,
	Avatar,
	pageMeta,
	onOutsideClickDirective,
	Dropdown
} from 'frappe-ui';

let components = import.meta.globEager('./*.vue'); // To get each component inside this folder

let globalFrappeUIComponents = {
	Button,
	Alert,
	Avatar,
	Badge,
	FeatherIcon,
	Card,
	LoadingIndicator,
	LoadingText,
	SuccessMessage,
	Spinner,
	Link,
	Input,
	FrappeUIDialog: Dialog,
	FrappeUIDropdown: Dropdown
};

export default function registerGlobalComponents(app) {
	app.directive('on-outside-click', onOutsideClickDirective);

	for (let path in components) {
		let component = components[path];
		let name = path.replace('./', '').replace('.vue', '');
		app.component(name, component.default || component);
	}

	for (let key in globalFrappeUIComponents) {
		app.component(key, globalFrappeUIComponents[key]);
	}

	// Plugin
	app.use(pageMeta);
}

export { components };
