import React, { useEffect, useState, Fragment } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsContainerType from 'ids-enterprise-wc/components/ids-container/ids-container';
import 'ids-enterprise-wc/components/ids-locale/ids-locale';

const IdsLocale = () => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const container = document.querySelector<IdsContainerType>('ids-container');

    const setLanguage = async () => {
      await container?.setLanguage('tl');
    };

    setKeys([]);
    // setKeys(Object.keys(container?.language?.messages));

    setLanguage();
  }, []);

  return (
    <>
      <IdsTitle>Locale (Translated Strings) Example</IdsTitle>

      <IdsGrid cols="4" gap="sm">
        {keys.map(item => (
          <Fragment key={item}>
            <IdsGridCell colSpan="1" key={item}>
              <ids-text font-weight="bold">{item}</ids-text>
            </IdsGridCell>
            <IdsGridCell colSpan="3">
              <ids-text translate-text="true" translation-key={item}></ids-text>
            </IdsGridCell>
          </Fragment>
        ))}
      </IdsGrid>
    </>
  );
};

export default IdsLocale;
