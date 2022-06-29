import type IdsTag from 'ids-enterprise-wc/components/ids-icon/ids-icon.js';
// Initialize a component.
const tag: any = document.querySelector('ids-tag').cloneNode(false);

// Append a component and set some properties and event handler
(tag as IdsTag).color = 'error';
tag.innerText = 'Added in Code';

document.body.appendChild(tag);
