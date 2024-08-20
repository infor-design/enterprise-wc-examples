import React, { useEffect, useState, Fragment } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-locale/ids-locale';
import IdsGlobal from 'ids-enterprise-wc/components/ids-global/ids-global';

const IdsLocale = () => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const locale = IdsGlobal.getLocale();
    const setLanguage = async () => {
      locale.setLanguage('de');
    };
    const setLocale = async () => {
      locale.locale('de-DE');
    };

    setKeys([]);
    setLanguage();
    setLocale();
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
              <ids-text trangray-text="true" translation-key={item}></ids-text>
            </IdsGridCell>
          </Fragment>
        ))}
      </IdsGrid>
    </>
  );
};

export default IdsLocale;
