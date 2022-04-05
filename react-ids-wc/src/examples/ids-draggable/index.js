import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-draggable/ids-draggable';

// import './example.css';

const IdsDraggable = () => {
  const dragRef = useRef();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const element = dragRef.current

    // Event handlers to be used in attach and cleanup event listener
    const handleDragStart = (e) => console.info('ids-dragstart', e.detail);
    const handleDrag = (e) => console.info('ids-drag', e.detail);
    const handleDragEnd = (e) => console.info('ids-dragend', e.detail);

    // Attach event listeners
    element.addEventListener('ids-dragstart', handleDragStart);
    element.addEventListener('ids-drag', handleDrag);
    element.addEventListener('ids-dragend', handleDragEnd);

    // Clean event listeners on component unmount
    return () => [
      element.removeEventListener('ids-dragstart', handleDragStart),
      element.removeEventListener('ids-drag', handleDrag),
      element.removeEventListener('ids-dragend', handleDragEnd)
    ]
  }, [])

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Draggable
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-draggable>
          <div className="ids-draggable-demo-box">
            <ids-text>no axis</ids-text>
          </div>
        </ids-draggable>
        <ids-draggable axis="y">
          <div className="ids-draggable-demo-box">
            <ids-text>axis='y'</ids-text>
          </div>
        </ids-draggable>
        <ids-draggable axis="x">
          <div className="ids-draggable-demo-box">
            <ids-text>axis='x'</ids-text>
          </div>
        </ids-draggable>
        <ids-draggable
          ref={dragRef}
          id="limit-transform-draggable"
          max-transform-x="80"
          min-transform-x="-20"
          max-transform-y="80"
          min-transform-y="-80"
          handle="#limit-transform-draggable .ids-draggable-demo-box"
        >
          <div className="ids-draggable-demo-box">
            <div>
              <ids-text>w/limits</ids-text>
            </div>
          </div>
          <div className="draggable-limit-markers">
            <ids-text tag="p" color="unset" font-size="10">
              min-transform-x: -20
            </ids-text>
            <ids-text tag="p" color="unset" font-size="10">
              max-transform-x: 80
            </ids-text>
            <ids-text tag="p" color="unset" font-size="10">
              min-transform-y: -80
            </ids-text>
            <ids-text tag="p" color="unset" font-size="10">
              max-transform-y: 80
            </ids-text>
          </div>
        </ids-draggable>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Draggable (Bounded by Div/Container)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <div className="ids-draggable-demo-content">
          <ids-draggable parent-containment>
            <div className="ids-draggable-demo-box">
              <ids-text>no axis</ids-text>
            </div>
          </ids-draggable>
          <ids-draggable axis="y" parent-containment>
            <div className="ids-draggable-demo-box">
              <ids-text>axis='y'</ids-text>
            </div>
          </ids-draggable>
          <ids-draggable axis="x" parent-containment>
            <div className="ids-draggable-demo-box">
              <ids-text>axis='x'</ids-text>
            </div>
          </ids-draggable>
        </div>
      </ids-layout-grid>
    </>
  );
};

export default IdsDraggable;
