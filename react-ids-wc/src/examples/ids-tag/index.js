import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
// import 'ids-enterprise-wc/components/ids-text';
// import 'ids-enterprise-wc/components/ids-icon';
// import 'ids-enterprise-wc/components/ids-tag';

function IdsTag() {
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
    <>
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
          <ids-tag ref={reactInfoTagRef}>{reactInfoText}</ids-tag>
          <ids-tag color={type}>
            <span>{person}</span>
          </ids-tag>
          <ids-tag clickable="true" id="ids-clickable-tag">
            Clickable Tag
            <ids-icon
              icon="caret-right"
              size="small"
              onClick={handleClickable}
            ></ids-icon>
          </ids-tag>
          <ids-tag dismissible="true" ref={dismissibleTagRef}>
            <slot>{person}</slot>
          </ids-tag>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
}

export default IdsTag;
