import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid.js';
import 'ids-enterprise-wc/ids-text/ids-text.js';
import 'ids-enterprise-wc/ids-icon/ids-icon.js';
import 'ids-enterprise-wc/ids-tag/ids-tag.js';

function IdsTags() {
  const reactInfoTagRef = useRef();
  const dismissibleTagRef = useRef();

  const reactInfoText = `React ${React.version}`;
  const person = 'John Smith';
  const type = 'error';

  function handleClickable(e) {
    console.log('Tag clicked:', e.target.parentNode.textContent);
  }

  useEffect(() => {
    reactInfoTagRef.current.color = 'success';
    dismissibleTagRef.current.addEventListener('tagremoved', e => {
      console.log('Tag Removed:', e.detail.elem.textContent);
    });
  });

  return (
    <React.Fragment>
      <ids-layout-grid>
        <ids-text font-size="12">Normal Tags</ids-text>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell>
          <ids-tag>Normal Tag</ids-tag>
          <ids-tag color="secondary">Secondary Tags</ids-tag>
          <ids-tag color="error">Error Tag</ids-tag>
          <ids-tag color="success">Success Tag</ids-tag>
          <ids-tag color="caution">Warning Tag</ids-tag>
          <ids-tag color="#EDE3FC">Custom Tag Color</ids-tag>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-text font-size="12">Dynamic Tags</ids-text>
      </ids-layout-grid>
      <ids-layout-grid>
        <ids-layout-grid-cell>
          <ids-tag ref={ reactInfoTagRef }>{ reactInfoText }</ids-tag>
          <ids-tag color={ type }><span>{ person }</span></ids-tag>
          <ids-tag clickable="true" id="ids-clickable-tag">Clickable Tag
            <ids-icon icon="caret-right" size="small" onClick={ handleClickable }></ids-icon>
          </ids-tag>
          <ids-tag dismissible="true" ref={ dismissibleTagRef }><slot>{ person }</slot></ids-tag>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </React.Fragment>
  );
}

export default IdsTags;
