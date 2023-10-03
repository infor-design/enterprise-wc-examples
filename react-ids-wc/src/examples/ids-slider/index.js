import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-slider/ids-slider';
import 'ids-enterprise-wc/components/ids-draggable/ids-draggable';
import labels from './labels';

const IdsSlider = () => {
  const surveyRef = useRef();

  useEffect(() => {
    const getClosestLabelSettings = targetValue =>
      labels.find(el => targetValue <= el.value);
    const survey = surveyRef.current;

    survey.labels = labels.map(item => item.text);

    // Adjust slider track/tick color when value changes
    const fixSliderColorOnChange = e => {
      const sliderValue = e.detail.value;
      const targetLabelSettings = getClosestLabelSettings(sliderValue);
      survey.color = targetLabelSettings?.color;
    };
    survey.color = getClosestLabelSettings(survey.value)?.color;

    survey.addEventListener('ids-slider-drag', fixSliderColorOnChange);
    survey.addEventListener('change', fixSliderColorOnChange);

    return () => {
      survey.removeEventListener('ids-slider-drag', fixSliderColorOnChange);
      survey.removeEventListener('change', fixSliderColorOnChange);
    };
  }, []);

  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          Slider
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="xl">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Single Slider:{' '}
          </ids-text>
          <ids-slider
            type="single"
            show-tooltip
            label="Single-thumb"
            value="20"
          ></ids-slider>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Range Slider:{' '}
          </ids-text>
          <ids-slider
            type="range"
            show-tooltip
            label="Multi-thumb minimum"
            label-secondary="Multi-thumb maximum"
          ></ids-slider>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Step Slider:{' '}
          </ids-text>
          <ids-slider
            type="step"
            step-number="11"
            show-tooltip
            label="Single-thumb with steps"
          ></ids-slider>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="xl">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Vertical Sliders:{' '}
          </ids-text>
          <ids-slider
            type="single"
            vertical
            color="red"
            show-tooltip
            label="Colorful single-thumb"
          ></ids-slider>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-slider
            type="range"
            vertical
            color="green"
            show-tooltip
            label="Colorful multi-thumb minimum"
            label-secondary="Colorful multi-thumb maximum"
          ></ids-slider>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-slider
            ref={surveyRef}
            type="step"
            vertical
            step-number="6"
            color=""
            label="Status"
          ></ids-slider>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsSlider;
