import React, { useRef, useEffect, useState } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';

import 'ids-enterprise-wc/components/ids-accordion/ids-accordion';
import type IdsAccordionType from 'ids-enterprise-wc/components/ids-accordion/ids-accordion';

const IdsAccordion = () => {
  const accordionRef = useRef<IdsAccordionType>()
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const accordion = accordionRef.current

    accordion?.panels.forEach(el => {
      el.expanded = expanded
    })
  }, [expanded])

  return (
    <>
      <IdsTitle>Accordion Example</IdsTitle>

      <IdsGrid cols="2" gap="md">
        <IdsGridCell>
          <ids-accordion ref={accordionRef}>
            {['Warehouse Location', 'Sort By', 'Brand Name', 'Material'].map(item => (
              <ids-accordion-panel key={item}>
                <ids-accordion-header slot="header">
                  <ids-text font-size="16">{item}</ids-text>
                </ids-accordion-header>
                <ids-text slot="content">
                  Remix, optimize, "B2B, iterate?" Best-of-breed efficient
                  beta-test; social cutting-edge: rich magnetic tagclouds
                  front-end infomediaries viral authentic incentivize sexy
                  extensible functionalities incentivize. Generate killer
                  authentic grow vertical blogospheres, functionalities ecologies
                  harness, "tag solutions synergies exploit data-driven B2C
                  open-source e-markets optimize create, enhance convergence
                  create." Out-of-the-box strategize best-of-breed back-end,
                  deploy design markets metrics. Content web services enhance
                  leading-edge Cluetrain, deliverables dot-com scalable.
                  User-centric morph, back-end, synthesize mesh, frictionless,
                  exploit next-generation tag portals, e-commerce channels;
                  integrate; recontextualize distributed revolutionize innovative
                  eyeballs.
                </ids-text>
              </ids-accordion-panel>
            ))}
          </ids-accordion>
        </IdsGridCell>
        <IdsGridCell>
          <ids-button
            appearance="primary"
            onClick={() => setExpanded(!expanded)}
          >
            <span>{!expanded ? 'Expand All' : 'Collapse All'}</span>
          </ids-button>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsAccordion;
