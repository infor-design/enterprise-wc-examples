import { useEffect, useRef } from 'react';
import useEvent from '../../hooks/useEvent';
import type IdsSliderType from 'ids-enterprise-wc/components/ids-slider/ids-slider';
import 'ids-enterprise-wc/components/ids-slider/ids-slider';


interface IdsSliderProps {
  id?: string;
  class?: string;
  color?: string;
  label?: string;
  labels?: string[];
  labelSecondary?: string;
  showTooltip?: boolean;
  stepNumber?: number;
  type: IdsSliderType['type'];
  value?: number | string;
  vertical?: boolean;
  onDrag?: (e: any) => void;
  onChange?: (e: any) => void;
}

const IdsSlider: React.FC<IdsSliderProps> = (props) => {
  const sliderRef = useRef<IdsSliderType>();

  useEvent('ids-slider-drag', (e: Event) => props.onDrag?.(e), sliderRef);
  useEvent('change', (e: Event) => props.onChange?.(e), sliderRef);

  useEffect(() => {
    const idsSliderElement = sliderRef?.current;
    if (idsSliderElement) {
      idsSliderElement.color = props.color ?? '';
      idsSliderElement.labels = props.labels ?? [];
    }
  }, [props.color, props.labels]);

  return (
    <ids-slider
      ref={sliderRef}
      id={props.id}
      class={props.class}
      color={props.color}
      label={props.label}
      label-secondary={props.labelSecondary}
      type={props.type}
      value={props.value}
      vertical={props.vertical}
      show-tooltip={props.showTooltip}
      step-number={props.stepNumber}
    ></ids-slider>
  );
};

export default IdsSlider;
