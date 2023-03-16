import React, { useRef, useEffect } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsSliderType from 'ids-enterprise-wc/components/ids-slider/ids-slider';
import 'ids-enterprise-wc/components/ids-slider/ids-slider';
import 'ids-enterprise-wc/components/ids-draggable/ids-draggable';
import labels from './labels';

const IdsSlider = () => {
  const surveyRef = useRef<IdsSliderType>();

  useEffect(() => {
    const getClosestLabelSettings = (targetValue: number) =>
      labels.find(el => targetValue <= el.value);
    const survey = surveyRef.current;

    if (survey) survey.labels = labels.map(item => item.text);

    // Adjust slider track/tick color when value changes
    const fixSliderColorOnChange = (e: any) => {
      const sliderValue = e?.detail?.value;
      const targetLabelSettings = getClosestLabelSettings(sliderValue);
      if (survey) survey.color = targetLabelSettings?.color ?? '';
    };
    if (survey) survey.color = getClosestLabelSettings(survey.value)?.color ?? '';

    survey?.addEventListener('ids-slider-drag', fixSliderColorOnChange);
    survey?.addEventListener('change', fixSliderColorOnChange);

    return function cleanup() {
      survey?.removeEventListener('ids-slider-drag', fixSliderColorOnChange);
      survey?.removeEventListener('change', fixSliderColorOnChange);
    };
  }, []);

  return (
    <>
      <IdsTitle>Slider Example</IdsTitle>

      <IdsGrid cols="3" gap="xl">
        <IdsGridCell>
          <ids-text font-size="12" type="h1">
            Single Slider:{' '}
          </ids-text>
          <ids-slider
            type="single"
            show-tooltip
            label="Single-thumb"
            value="20"
          ></ids-slider>
        </IdsGridCell>
        <IdsGridCell>
          <ids-text font-size="12" type="h1">
            Range Slider:{' '}
          </ids-text>
          <ids-slider
            type="range"
            show-tooltip
            label="Multi-thumb minimum"
            label-secondary="Multi-thumb maximum"
          ></ids-slider>
        </IdsGridCell>
        <IdsGridCell>
          <ids-text font-size="12" type="h1">
            Step Slider:{' '}
          </ids-text>
          <ids-slider
            type="step"
            step-number="11"
            show-tooltip
            label="Single-thumb with steps"
          ></ids-slider>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid cols="3" gap="xl">
        <IdsGridCell>
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
        </IdsGridCell>
        <IdsGridCell>
          <ids-slider
            type="range"
            vertical
            color="green"
            show-tooltip
            label="Colorful multi-thumb minimum"
            label-secondary="Colorful multi-thumb maximum"
          ></ids-slider>
        </IdsGridCell>
        <IdsGridCell>
          <ids-slider
            ref={surveyRef}
            type="step"
            vertical
            step-number="6"
            color=""
            label="Status"
          ></ids-slider>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsSlider;
