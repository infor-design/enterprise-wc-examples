import React from 'react';
import 'ids-enterprise-wc/components/ids-image/ids-image';
import img10 from '../../assets/images/10.jpg';
import placeHolderImg6060 from '../../assets/images/placeholder-60x60.png';
import placeHolderImg154120 from '../../assets/images/placeholder-154x120.png';
import placeHolderImg300350 from '../../assets/images/placeholder-300x350.png';
import placeholderImg500200 from '../../assets/images/placeholder-500x200.png';

const IdsImage = () => {
  return (
    <>
      <ids-layout-grid cols="7">
        <ids-layout-grid-cell col-span="1">
          <ids-text type="h2" font-size="14">
            Initials and Statuses
          </ids-text>
          <ids-image initials="mn" round tabindex="0"></ids-image>
          <br />
          <br />
          <ids-image
            src={img10}
            alt="Photo of Evyn"
            round
            tabindex="0"
          ></ids-image>
          <br />
          <br />
          <ids-image
            src={img10}
            alt="Photo of Evyn"
            round
            user-status="available"
            tabindex="0"
          ></ids-image>
          <br />
          <br />
          <ids-image
            alt="Photo of Evyn"
            src={img10}
            round
            user-status="away"
            tabindex="0"
          ></ids-image>
          <br />
          <br />
          <ids-image
            src={img10}
            alt="Photo of Evyn"
            round
            user-status="busy"
            tabindex="0"
          ></ids-image>
          <br />
          <br />
          <ids-image
            src={img10}
            alt="Photo of Evyn"
            round
            user-status="do-not-disturb"
            tabindex="0"
          ></ids-image>
          <br />
          <br />
          <ids-image
            src={img10}
            alt="Photo of Evyn"
            round
            user-status="unknown"
            tabindex="0"
          ></ids-image>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1">
          <ids-text type="h2" font-size="14">
            Size SM - 60x60
          </ids-text>
          <ids-image
            src={placeHolderImg6060}
            alt="image-sm 60x60"
            size="sm"
            tabindex="0"
          ></ids-image>
          <ids-text font-size="14">image from src</ids-text>
          <br />
          <br />
          <ids-image
            src="../assets/images/non-existant.jpg"
            alt="image-sm non-existant"
            size="sm"
            fallback
            tabindex="0"
          ></ids-image>
          <ids-text font-size="14">placeholder via fallback</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1">
          <ids-text type="h2" font-size="14">
            Size MD - 154x120
          </ids-text>
          <ids-image
            src={placeHolderImg154120}
            alt="image-md 154x120"
            size="md"
            tabindex="0"
          ></ids-image>
          <ids-text font-size="14">image from src</ids-text>
          <br />
          <br />
          <ids-image
            alt="image-md non-existant"
            size="md"
            placeholder
            tabindex="0"
          ></ids-image>
          <ids-text font-size="14">placeholder via attribute</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="2">
          <ids-text type="h2" font-size="14">
            Size LG - 300x350
          </ids-text>
          <ids-image
            src={placeHolderImg300350}
            alt="image-lg 300x350"
            size="lg"
            tabindex="0"
          ></ids-image>
          <ids-text font-size="14">image from src</ids-text>
          <br />
          <br />
          <ids-image
            alt="image-lg no src"
            size="lg"
            fallback
            tabindex="0"
          ></ids-image>
          <ids-text font-size="14">placeholder via fallback</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="2">
          <ids-text type="h2" font-size="14">
            Size AUTO
          </ids-text>
          <ids-image
            src={placeholderImg500200}
            alt="image-auto 500x200"
            tabindex="0"
          ></ids-image>
          <ids-text font-size="14">image from src</ids-text>
          <br />
          <br />
          <ids-image placeholder tabindex="0"></ids-image>
          <ids-text font-size="14">placeholder via attribute</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsImage;
