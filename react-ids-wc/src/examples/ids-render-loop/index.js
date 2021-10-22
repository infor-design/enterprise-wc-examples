import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-button';

import renderLoop from 'ids-enterprise-wc/components/ids-render-loop/ids-render-loop-global';
import {
  // IdsRenderLoop,
  IdsRenderLoopItem
} from 'ids-enterprise-wc/mixins/ids-render-loop-mixin';

const IdsRenderLoop = () => {
  const countdownTriggerRef = useRef();
  const renderLoopRef = useRef();

  useEffect(() => {
    const duration = 1000;
    const countdownBtn = countdownTriggerRef.current;
    const countdownSpan = renderLoopRef.current;
    let timer;

    countdownBtn.addEventListener('click', () => {
      // Clear any previously-set RenderLoop items,
      // making them "destroy" without calling the Timeout function
      if (timer) {
        timer.destroy(true);
      }

      countdownSpan.classList.remove('done');

      // Create a RenderLoop item that updates a countdown number on its callback
      timer = new IdsRenderLoopItem({
        duration,
        updateCallback() {
          const timeLeft = (duration - this.elapsedTime).toFixed(0);
          countdownSpan.textContent = `${timeLeft}`;
        },
        timeoutCallback() {
          countdownSpan.textContent = 'DONE!';
          countdownSpan.classList.add('done');
          this.destroy();
        }
      });
      renderLoop.register(timer);
    });
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          RenderLoop
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="2" gap="md">
        <ids-layout-grid-cell>
          <p>
            <ids-text ref={renderLoopRef} font-size="48">
              1000
            </ids-text>
          </p>

          <ids-button ref={countdownTriggerRef} type="secondary">
            <span>Trigger a Countdown</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsRenderLoop;
