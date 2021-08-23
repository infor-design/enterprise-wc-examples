// Import the components we want to use.
import IdsTag from 'ids-enterprise-wc/components/ids-tag';

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
