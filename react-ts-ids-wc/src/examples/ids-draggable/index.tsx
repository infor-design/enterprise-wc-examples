import IdsDraggable from '../../components/ids-draggable/IdsDraggable';
import IdsGrid from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import './example.css';


const DemoBox: React.FC<{ children: any; }> = (props) => (
  <div className="ids-draggable-demo-box">{props.children}</div>
);

const IdsDraggableExample = () => {
  const onDragStart = (e: any) => console.info('ids-dragstart', e?.detail);
  const onDrag = (e: any) => console.info('ids-drag', e?.detail);
  const onDragEnd = (e: any) => console.info('ids-dragend', e?.detail);

  return (
    <>
      <IdsTitle>Draggable Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsDraggable
          onDragStart={onDragStart}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        >
          <DemoBox>
            <ids-text>no axis</ids-text>
          </DemoBox>
        </IdsDraggable>
        <IdsDraggable axis="y">
          <DemoBox>
            <ids-text>axis='y'</ids-text>
          </DemoBox>
        </IdsDraggable>
        <IdsDraggable axis="x">
          <DemoBox>
            <ids-text>axis='x'</ids-text>
          </DemoBox>
        </IdsDraggable>
        <IdsDraggable
          id="limit-transform-draggable"
          handle="#limit-transform-draggable .ids-draggable-demo-box"
          maxTransformX={80}
          minTransformX={-20}
          maxTransformY={80}
          minTransformY={-80}
          onDragStart={onDragStart}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        >
          <DemoBox>
            <div>
              <ids-text>w/limits</ids-text>
            </div>
          </DemoBox>
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
        </IdsDraggable>
      </IdsGrid>
      <IdsGrid auto-fit>
        <ids-text font-size="12" type="h1">
          Draggable (Bounded by Div/Container)
        </ids-text>
      </IdsGrid>
      <IdsGrid auto-fit>
        <div className="ids-draggable-demo-content">
          <IdsDraggable parentContainment>
            <DemoBox>
              <ids-text>no axis</ids-text>
            </DemoBox>
          </IdsDraggable>
          <IdsDraggable axis="y" parentContainment>
            <DemoBox>
              <ids-text>axis='y'</ids-text>
            </DemoBox>
          </IdsDraggable>
          <IdsDraggable axis="x" parentContainment>
            <DemoBox>
              <ids-text>axis='x'</ids-text>
            </DemoBox>
          </IdsDraggable>
        </div>
      </IdsGrid>
    </>
  );
};

export default IdsDraggableExample;
