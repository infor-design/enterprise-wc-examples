// Import the components we want to use.
// @ts-ignore
import { default as IdsTag } from 'ids-enterprise-wc/ids-tag/ids-tag.js';

// Initialize a component.
const tag = new IdsTag();

// Append a component and set some properties and event handler
tag.dismissible = true;
tag.color = 'error';
tag.innerText = 'Added in Code';
tag.on('tagremoved', (a: any) => {
  console.log(a);
});

document.body.appendChild(tag);
