import IdsTag from './node_modules/ids-enterprise-wc/components/ids-tag/ids-tag';

// Initialize a component.
const tag2 = new IdsTag();

// Append a component and set some properties and event handler
tag2.color = 'error';
tag2.innerText = 'Added in Code';

document.body.appendChild(tag2);