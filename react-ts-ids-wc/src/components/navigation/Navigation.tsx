import React from 'react';
import { IdsAccordion, IdsAccordionItem } from '../ids-accordion/IdsAccordion';
import { routes } from '../../config/routes';


export const Navigation: React.FC = () => (
  <IdsAccordion>
    <IdsAccordionItem header="Form Inputs" links={routes.FORMS} />
    <IdsAccordionItem header="Navigation and Interaction" links={routes.NAVS} />
    <IdsAccordionItem header="Messages and Alerts" links={routes.MESSAGES} />
    <IdsAccordionItem header="Lists" links={routes.LISTS} />
    <IdsAccordionItem header="Layouts" icon="columns" links={routes.LAYOUTS} />
    <IdsAccordionItem header="Patterns" icon="design-mode" links={routes.PATTERNS} />
    <IdsAccordionItem header="Charts and Visualizations" links={routes.CHARTS} />
    <IdsAccordionItem header="Typography" icon="change-font" links={routes.FONTS} />
  </IdsAccordion>
);

export default Navigation;
