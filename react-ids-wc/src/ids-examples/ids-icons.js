import React from 'react';
import iconlist from './ids-icons-list.js';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid.js';
import 'ids-enterprise-wc/ids-text/ids-text.js';
import 'ids-enterprise-wc/ids-icon/ids-icon.js';

function getIcon(iconName, i) {
  return (
    <span className="ids-icon-container" key={iconName + i}>
      <ids-text font-size="10">{'icon-' + iconName}</ids-text><br/>
      <ids-icon icon={iconName} size="large"></ids-icon>
      <ids-icon icon={iconName}></ids-icon>
      <ids-icon icon={iconName} size="small"></ids-icon>
    </span>
  );
}

function IdsIcon() {
  return (
    <React.Fragment>
      <ids-layout-grid>
        <ids-text font-size="12">Icons</ids-text>
      </ids-layout-grid>
      <ids-layout-grid className="ids-icon-list" fixed="true">
        {iconlist.map((iconName, i) => getIcon(iconName, i))}
      </ids-layout-grid>
    </React.Fragment>
  );
}

export default IdsIcon;
