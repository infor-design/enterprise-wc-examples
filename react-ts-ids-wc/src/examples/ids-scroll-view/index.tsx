import React from 'react';
import 'ids-enterprise-wc/components/ids-scroll-view/ids-scroll-view';
import camera1 from '../../assets/images/camera-1.png';
import camera2 from '../../assets/images/camera-2.png';
import camera3 from '../../assets/images/camera-3.png';
import camera4 from '../../assets/images/camera-4.png';
import camera5 from '../../assets/images/camera-5.png';
import camera6 from '../../assets/images/camera-6.png';

const IdsScrollView = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Scroll View
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4">
        <ids-layout-grid-cell col-span="1">
          <ids-scroll-view>
            <img src={camera1} slot="scroll-view-item" alt="Slide 1, Sony Camera, Front" />
            <img src={camera2} slot="scroll-view-item" alt="Slide 3, Sony Camera, Back Display" />
            <img src={camera3} slot="scroll-view-item" alt="Slide 3, Sony Camera, From Top" />
            <img src={camera4} slot="scroll-view-item" alt="Slide 4, Olympus Camera, Front" />
            <img src={camera5} slot="scroll-view-item" alt="Slide 5, Olympus Camera, Exposed to water" />
            <img src={camera6} slot="scroll-view-item" alt="Slide 6, Sony E-mount Camera, Front" />
          </ids-scroll-view>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsScrollView;
