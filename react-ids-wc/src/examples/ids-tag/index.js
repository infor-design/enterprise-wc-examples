import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-tag/ids-tag';


function IdsTag() {
  const reactInfoTagRef = useRef();
  const dismissibleTagRef = useRef();

  const reactInfoText = `React ${React.version}`;
  const person = 'John Smith';
  const type = 'error';

  const handleClickable = (e) => {
    console.info('Tag clicked:', e.target.parentNode.textContent);
  }

  useEffect(() => {
    // Dynamically set tag color
    reactInfoTagRef.current.color = 'success';

    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const dismissibleTag = dismissibleTagRef.current

    // Event handler to be used in attach and cleanup event listener
    const handleTagRemove = e => {
      console.log('Tag Removed:', e.detail.elem.textContent);
    }

    // Attach event listener
    dismissibleTag.addEventListener('tagremove', handleTagRemove);

    // Cleanup event listener on React component unmount
    return () => dismissibleTag.removeEventListener('tagremove', handleTagRemove);
  }, []);

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
          <ids-tag clickable="true">
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
