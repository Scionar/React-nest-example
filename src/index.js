import React from 'react';
import ReactDOM from 'react-dom';
import * as Reakit from 'reakit';
import Components from './components';

document.querySelectorAll('.react').forEach(domContainer => {
	const componentName = domContainer.dataset.component;
	const componentData = domContainer.dataset.componentData;
	const componentChildren = domContainer.innerHTML;

	// Libraries to search component.
	const libraries = [
		Components,
		Reakit
	];

	// Set library if any includes component with specified name. Otherwise
	// undefined.
	const usedLibrary = libraries.find(library => library[componentName]);

	const component = usedLibrary ? usedLibrary[componentName] : undefined;

	// Render component if found from library.
	if (component) {
		const renderedComponent = React.createElement(
			component,
			componentData,
			componentChildren
		);
		ReactDOM.render(renderedComponent, domContainer);
	}
});
