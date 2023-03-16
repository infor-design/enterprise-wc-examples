import React from 'react';
import { IdsAccordion, IdsAccordionItem } from '../ids-accordion/IdsAccordion';
import { routes } from '../../config/routes';


export const Navigation: React.FC = () => (
  <IdsAccordion>
    <IdsAccordionItem header="Form Inputs" icon="helper-list-select" links={routes.FORMS} />
    <IdsAccordionItem header="Navigation and Interaction" icon="food-menu" links={routes.NAVS} />
    <IdsAccordionItem header="Messages and Alerts" icon="alert" links={routes.MESSAGES} />
    <IdsAccordionItem header="Lists" icon="number-list" links={routes.LISTS} />
    <IdsAccordionItem header="Layouts" icon="columns" links={routes.LAYOUTS} />
    <IdsAccordionItem header="Patterns" icon="design-mode" links={routes.PATTERNS} />
    <IdsAccordionItem header="Charts and Visualizations" icon="pie-chart" links={routes.CHARTS} />
    <IdsAccordionItem header="Typography" icon="change-font" links={routes.FONTS} />
  </IdsAccordion>
);

export default Navigation;
