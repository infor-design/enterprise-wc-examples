import React from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-block-grid';

const IdsBlockGrid = () => {
  return (
    <>
      <ids-layout-grid auto="true" gap="md">
        <ids-text font-size="12" type="h1">
          Block Grid
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-block-grid align="center">
            {Array(7)
              .fill({
                imgSrc:
                  'https://via.placeholder.com/200/888888/ffffff/?text=200 x 200',
                imgAlt: 'Placeholder 200x200',
                text: 'consectetur adipisicing elit. Praesentium error, ea earum quod eligendi nobis dolorem, cupiditate sint optio quos quae quisquam necessitatibus incidunt.'
              })
              .map((item, index) => (
                <ids-block-grid-item key={`${item.imgAlt}-${index}`}>
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                  />
                  <ids-text type="p">{item.text}</ids-text>
                </ids-block-grid-item>
              ))}
          </ids-block-grid>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsBlockGrid;
