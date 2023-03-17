import { useState } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsSlider from '../../components/ids-slider/IdsSlider';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-slider/ids-slider';
import 'ids-enterprise-wc/components/ids-draggable/ids-draggable';
import labels from './labels';


type LabelType = {
  value: number;
  text: string;
  color: string;
};

const findLabelSettings = (targetValue: number): LabelType | undefined => {
  return labels.find((label: LabelType) => targetValue <= label.value);
}

const IdsSliderExample = () => {
  const [sliderColor, setSliderColor] = useState('');

  // Adjust slider track/tick color when value changes
  const updateSliderColor = (e: any) => {
    const sliderValue = e?.detail?.value;
    const label = findLabelSettings(sliderValue);
    setSliderColor(label?.color ?? '');
  };

  return (
    <>
      <IdsTitle>Slider Example</IdsTitle>

      <IdsGrid cols="3" gap="xl">
        <IdsGridCell>
          <ids-text font-size="12" type="h1">
            Single Slider:{' '}
          </ids-text>
          <IdsSlider
            type="single"
            label="Single-thumb"
            showTooltip
            value="20"
          />
        </IdsGridCell>
        <IdsGridCell>
          <ids-text font-size="12" type="h1">
            Range Slider:{' '}
          </ids-text>
          <IdsSlider
            type="range"
            label="Multi-thumb minimum"
            labelSecondary="Multi-thumb maximum"
            showTooltip
          />
        </IdsGridCell>
        <IdsGridCell>
          <ids-text font-size="12" type="h1">
            Step Slider:{' '}
          </ids-text>
          <IdsSlider
            type="step"
            stepNumber={11}
            showTooltip
            label="Single-thumb with steps"
          />
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid cols="3" gap="xl">
        <IdsGridCell>
          <ids-text font-size="12" type="h1">
            Vertical Sliders:{' '}
          </ids-text>
          <IdsSlider
            type="single"
            vertical
            color="red"
            showTooltip
            label="Colorful single-thumb"
          />
        </IdsGridCell>
        <IdsGridCell>
          <IdsSlider
            type="range"
            vertical
            color="green"
            showTooltip
            label="Colorful multi-thumb minimum"
            label-secondary="Colorful multi-thumb maximum"
          />
        </IdsGridCell>
        <IdsGridCell>
          <IdsSlider
            type="step"
            color={sliderColor}
            label="Status"
            labels={labels.map(item => item.text)}
            onChange={updateSliderColor}
            onDrag={updateSliderColor}
            stepNumber={6}
            vertical
          />
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsSliderExample;
