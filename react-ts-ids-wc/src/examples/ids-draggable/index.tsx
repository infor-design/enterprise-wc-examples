import React, { useRef } from 'react';
import { useEvent } from '../../hooks/useEvent';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsDraggableType from 'ids-enterprise-wc/components/ids-draggable/ids-draggable';
import 'ids-enterprise-wc/components/ids-draggable/ids-draggable';


const IdsDraggable = () => {
  const handleDragStart = (e: CustomEvent) => console.info('ids-dragstart', e.detail);
  const handleDrag = (e: CustomEvent) => console.info('ids-drag', e.detail);
  const handleDragEnd = (e: CustomEvent) => console.info('ids-dragend', e.detail);

  const dragRef = useRef<IdsDraggableType>();
  useEvent('ids-dragstart', handleDragStart, dragRef);
  useEvent('ids-drag', handleDrag, dragRef);
  useEvent('ids-dragend', handleDragEnd, dragRef);

  return (
    <>
      <IdsTitle>Draggable Example</IdsTitle>

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
