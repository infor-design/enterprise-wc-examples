import React from 'react';
import './App.css';

import IdsInput from './ids-examples/ids-input.js';
import IdsTags from './ids-examples/ids-tags.js';
import IdsText from './ids-examples/ids-text.js';
import IdsIcons from './ids-examples/ids-icons.js';
import IdsLayoutGrid from './ids-examples/ids-layout-grid.js';

function App() {
  return (
    <div className="App" role="main">
      <IdsInput />
      <IdsTags />
      <IdsText />
      <IdsIcons />
      <IdsLayoutGrid />
    </div>
  );
}

export default App;
