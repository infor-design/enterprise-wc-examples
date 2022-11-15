import React, { useEffect, useState, Fragment } from 'react';
import 'ids-enterprise-wc/components/ids-locale/ids-locale';

const IdsLocale = () => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const container = document.querySelector('ids-container');

    const setLanguage = async () => {
      await container.setLanguage('tl');
    };

    setKeys(Object.keys(container.language.messages));

    setLanguage();
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Locale (Translated Strings)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4" gap="sm">
        {keys.map(item => (
          <Fragment key={item}>
            <ids-layout-grid-cell col-span="1" key={item}>
              <ids-text font-weight="bold">{item}</ids-text>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell col-span="3">
              <ids-text translate-text="true" translation-key={item}></ids-text>
            </ids-layout-grid-cell>
          </Fragment>
        ))}
      </ids-layout-grid>
    </>
  );
};

export default IdsLocale;
