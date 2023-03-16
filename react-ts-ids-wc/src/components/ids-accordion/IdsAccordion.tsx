import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'ids-enterprise-wc/components/ids-accordion/ids-accordion';
import 'ids-enterprise-wc/components/ids-accordion/ids-accordion-header';
import 'ids-enterprise-wc/components/ids-accordion/ids-accordion-panel';
import 'ids-enterprise-wc/components/ids-text/ids-text';


export interface IdsAccordionType {
  children: any;
  // children: IdsAccordionItemType | IdsAccordionItemType[];
}
export interface IdsAccordionItemType {
  header: string;
  icon?: string;
  links?: { [href: string]: string };
}

export const IdsAccordionItem: React.FC<IdsAccordionItemType> = (props) => {
  const navigate = useNavigate();

  return (
    <ids-accordion-panel>
      <ids-accordion-header slot="header" icon={props.icon}>
        <ids-text font-size="16">{props.header}</ids-text>
      </ids-accordion-header>
      {props.links && Object.keys(props.links).map((href) => (
        <ids-accordion-panel slot="content" key={href}>
          <ids-accordion-header slot="header">
            <ids-text font-size="14" onClick={() => navigate(href)}>
              {props.links?.[href]}
            </ids-text>
          </ids-accordion-header>
        </ids-accordion-panel>
      ))}
    </ids-accordion-panel>
  );
}

export const IdsAccordion: React.FC<IdsAccordionType> = ({ children }) => (
  <ids-accordion>{children}</ids-accordion>
);

export default IdsAccordion;