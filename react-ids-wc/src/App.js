import React from 'react';
import './App.css';

import IdsTags from './ids-examples/ids-tags.js';
import IdsLabels from './ids-examples/ids-labels.js';
import IdsIcons from './ids-examples/ids-icons.js';
import IdsLayoutGrid from './ids-examples/ids-layout-grid.js';

function App() {
  return (
    <div className="App" role="main">
      <IdsTags />
      <IdsLabels />
      <IdsIcons />
      <IdsLayoutGrid />
    </div>
  );
}

export default App;
