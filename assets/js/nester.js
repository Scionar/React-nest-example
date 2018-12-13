(function() {
	document.querySelectorAll('.react').forEach(domContainer => {
		const componentName = domContainer.dataset.component;
		const componentData = domContainer.dataset.componentData;
		const componentChildren = domContainer.innerHTML;

		const component = Reakit[componentName];

		// Render component if found from library.
		if (component) {
			const renderedComponent = React.createElement(component, {}, componentChildren);
			ReactDOM.render(renderedComponent, domContainer);
		}
	});
})();
