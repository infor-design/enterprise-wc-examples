import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-tag/ids-tag';


const IdsTag = () => {
  const dismissibleTagRef = useRef();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const dismissibleTag = dismissibleTagRef.current;

    // Event handler to be used in attach and cleanup event listener
    const handleTagRemove = e => {
      console.log('Tag Removed:', e.detail.elem.textContent);
    };

    // Attach event listener
    dismissibleTag.addEventListener('tagremove', handleTagRemove);

    // Cleanup event listener on React component unmount
    return () =>
      dismissibleTag.removeEventListener('tagremove', handleTagRemove);
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12">Tags</ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-tag>Normal Tag</ids-tag>
          <ids-tag color="secondary">Secondary Tags</ids-tag>
          <ids-tag color="success">Success Tag</ids-tag>
          <ids-tag color="info">Info Tag</ids-tag>
          <ids-tag color="warning">Warning Tag</ids-tag>
          <ids-tag color="error">Error Tag</ids-tag>
          <ids-tag color="#5CC6C7">Custom Tag Color</ids-tag>
          <ids-tag clickable="true">
            Clickable Tag
            <ids-icon icon="caret-right" size="xsmall"></ids-icon>
          </ids-tag>
          <ids-tag dismissible="true">
            <span>Dismissible Tag 1</span>
            <ids-icon
              icon="close"
              size="xsmall"
            ></ids-icon>
          </ids-tag>
          <ids-tag dismissible="true" ref={dismissibleTagRef}>
            <span>Dismissible Tag 2</span>
          </ids-tag>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsTag;
