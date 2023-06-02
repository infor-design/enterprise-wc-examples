import React from 'react';
import IdsGrid from '../../components/ids-grid/IdsGrid';
import 'ids-enterprise-wc/components/ids-splitter/ids-splitter';
import './styles.css';

const IdsSplitter = () => {
  return (
    <>
      <IdsGrid auto-fit>
        <div className="demo-splitter">
          <ids-splitter>
            <ids-splitter-pane id="p1"></ids-splitter-pane>
            <ids-splitter-pane id="p2"></ids-splitter-pane>
          </ids-splitter>
        </div>
      </IdsGrid>

      <IdsGrid auto-fit>
        <ids-text font-size="12">Multiple</ids-text>
      </IdsGrid>
      <IdsGrid auto-fit>
        <div className="demo-splitter">
          <ids-splitter>
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane></ids-splitter-pane>
          </ids-splitter>
        </div>
      </IdsGrid>

      <IdsGrid auto-fit>
        <ids-text font-size="12">Vertical</ids-text>
      </IdsGrid>
      <IdsGrid auto-fit>
        <div className="demo-splitter">
          <ids-splitter axis="y">
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane></ids-splitter-pane>
          </ids-splitter>
        </div>
      </IdsGrid>

      <IdsGrid auto-fit>
        <ids-text font-size="12">Nested</ids-text>
      </IdsGrid>
      <IdsGrid auto-fit>
        <div className="demo-splitter">
          <ids-splitter>
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane>
              <ids-splitter axis="y">
                <ids-splitter-pane size="70%"></ids-splitter-pane>
                <ids-splitter-pane></ids-splitter-pane>
              </ids-splitter>
            </ids-splitter-pane>
          </ids-splitter>
        </div>
      </IdsGrid>
    </>
  );
};

export default IdsSplitter;
