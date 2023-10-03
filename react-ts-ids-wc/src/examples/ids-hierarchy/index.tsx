import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-hierarchy/ids-hierarchy';
import 'ids-enterprise-wc/components/ids-hierarchy/ids-hierarchy-item';
import 'ids-enterprise-wc/components/ids-hierarchy/ids-hierarchy-legend';
import 'ids-enterprise-wc/components/ids-hierarchy/ids-hierarchy-legend-item';
import headshot from '../../assets/images/headshot-1.jpg';

const IdsHierarchy = () => {
  return (
    <>
      <IdsTitle>Ids Hierarchy Example</IdsTitle>

      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell>
          <ids-hierarchy-legend>
            <ids-hierarchy-legend-item
              text="Full Time"
              color="azure-80"
            ></ids-hierarchy-legend-item>
            <ids-hierarchy-legend-item
              text="Part Time"
              color="turquoise-20"
            ></ids-hierarchy-legend-item>
            <ids-hierarchy-legend-item
              text="Contractor"
              color="amethyst-60"
            ></ids-hierarchy-legend-item>
            <ids-hierarchy-legend-item
              text="Open Position"
              color="slate-60"
            ></ids-hierarchy-legend-item>
          </ids-hierarchy-legend>

          <ids-hierarchy>
            <ids-hierarchy-item id="item-1" root-item expanded color="azure-80">
              <img src={headshot} alt="headshot" slot="avatar" />
              <ids-text slot="heading">Tony Cleveland</ids-text>
              <ids-text slot="subheading">Director</ids-text>
              <ids-text slot="micro">FT</ids-text>
              <div slot="menu">
                <ids-menu-button
                  id="item-menu-btn-id-one"
                  part="icon-menu"
                  menu="item-menu-id-one"
                >
                  <span className="audible">Popup Menu Button</span>
                  <ids-icon icon="more"></ids-icon>
                </ids-menu-button>
                <ids-popup-menu
                  id="item-menu-id-one"
                  target="#item-menu-btn-id-one"
                  trigger-type="click"
                >
                  <ids-menu-group>
                    <ids-menu-item value="1">Option One</ids-menu-item>
                    <ids-menu-item value="2">Option Two</ids-menu-item>
                    <ids-menu-item value="3">Option Three</ids-menu-item>
                  </ids-menu-group>
                </ids-popup-menu>
              </div>

              <ids-hierarchy-item id="item-2" color="turquoise-20">
                <ids-text slot="heading">Julie Dawes</ids-text>
                <ids-text slot="subheading">Records Clerk</ids-text>
                <ids-text slot="micro">PT</ids-text>
                <div slot="menu">
                  <ids-menu-button
                    part="icon-menu"
                    menu="item-menu-id-two"
                    id="item-menu-btn-id-two"
                  >
                    <span className="audible">Popup Menu Button</span>
                    <ids-icon icon="more"></ids-icon>
                  </ids-menu-button>
                  <ids-popup-menu
                    id="item-menu-id-two"
                    target="#item-menu-btn-id-two"
                    trigger-type="click"
                  >
                    <ids-menu-group>
                      <ids-menu-item value="1">Option One</ids-menu-item>
                      <ids-menu-item value="2">Option Two</ids-menu-item>
                      <ids-menu-item value="3">Option Three</ids-menu-item>
                      <ids-menu-item>
                        More Options
                        <ids-popup-menu>
                          <ids-menu-group>
                            <ids-menu-item value="4">Option Four</ids-menu-item>
                            <ids-menu-item value="5">Option Five</ids-menu-item>
                            <ids-menu-item value="6">Option Six</ids-menu-item>
                          </ids-menu-group>
                        </ids-popup-menu>
                      </ids-menu-item>
                    </ids-menu-group>
                  </ids-popup-menu>
                </div>
              </ids-hierarchy-item>
              <ids-hierarchy-item id="item-3" color="amethyst-60">
                <ids-text slot="heading">Kaylee Edwards</ids-text>
                <ids-text slot="subheading">Records Manager</ids-text>
                <ids-text slot="micro">C</ids-text>
                <div slot="menu">
                  <ids-menu-button
                    part="icon-menu"
                    menu="item-menu-id-three"
                    id="item-menu-btn-id-three"
                  >
                    <span className="audible">Popup Menu Button</span>
                    <ids-icon icon="more"></ids-icon>
                  </ids-menu-button>
                  <ids-popup-menu
                    id="item-menu-id-three"
                    target="#item-menu-btn-id-three"
                    trigger-type="click"
                  >
                    <ids-menu-group>
                      <ids-menu-item value="1">Option One</ids-menu-item>
                      <ids-menu-item value="2">Option Two</ids-menu-item>
                      <ids-menu-item value="3">Option Three</ids-menu-item>
                    </ids-menu-group>
                  </ids-popup-menu>
                </div>

                <ids-hierarchy-item id="item-4" color="slate-60">
                  <ids-text slot="heading">Julie Dawes</ids-text>
                  <ids-text slot="subheading">Records Clerk</ids-text>
                  <ids-text slot="micro">OP</ids-text>

                  <ids-hierarchy-item id="item-5" color="amethyst-60">
                    <ids-text slot="heading">Tony Cleveland</ids-text>
                    <ids-text slot="subheading">Director</ids-text>
                    <ids-text slot="micro">C</ids-text>
                  </ids-hierarchy-item>
                </ids-hierarchy-item>
              </ids-hierarchy-item>
            </ids-hierarchy-item>
          </ids-hierarchy>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsHierarchy;
