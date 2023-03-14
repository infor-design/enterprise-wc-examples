import React from 'react';
import { Accordion, AccordionItem } from '../accordion/Accordion';
import { routes } from '../../config/routes';


export const Navigation: React.FC = () => (
  <Accordion>
    <AccordionItem header="Form Inputs" icon="helper-list-select" links={routes.FORMS} />
    <AccordionItem header="Navigation and Interaction" icon="food-menu" links={routes.NAVS} />
    <AccordionItem header="Messages and Alerts" icon="alert" links={routes.MESSAGES} />
    <AccordionItem header="Lists" icon="number-list" links={routes.LISTS} />
    <AccordionItem header="Layouts" icon="columns" links={routes.LAYOUTS} />
    <AccordionItem header="Patterns" icon="design-mode" links={routes.PATTERNS} />
    <AccordionItem header="Charts and Visualizations" icon="pie-chart" links={routes.CHARTS} />
    <AccordionItem header="Typography" icon="change-font" links={routes.FONTS} />
  </Accordion>
);

export default Navigation;
