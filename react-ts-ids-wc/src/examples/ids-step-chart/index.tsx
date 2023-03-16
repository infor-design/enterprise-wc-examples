import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-step-chart/ids-step-chart';

const IdsStepChart = () => {
  return (
    <>
      <IdsTitle>Step Chart Example</IdsTitle>

      <ids-layout-grid cols="2" gap="md">
        <ids-layout-grid-cell>
          <ids-card>
            <div slot="card-header">
              <ids-text
                font-size="20"
                type="h2"
                overflow="ellipsis"
                tooltip="true"
              >
                My Project Step Examples
              </ids-text>
            </div>
            <div id="card-content" slot="card-content">
              <ids-step-chart
                class="chart"
                label="7 of 7 steps completed"
                color="emerald06"
                step-number="7"
                value="7"
                progress-color="ruby02"
              >
                <ids-icon slot="icon" icon="success"></ids-icon>
              </ids-step-chart>
              <ids-step-chart
                class="chart"
                label="2 of 7 steps completed"
                color="azure06"
                step-number="7"
                value="2"
              ></ids-step-chart>
              <ids-step-chart
                class="chart"
                label="2 of 7 steps completed"
                color="azure06"
                step-number="7"
                value="2"
                completed-label="5 days remaining"
              ></ids-step-chart>
              <ids-step-chart
                class="chart"
                label="2 of 7 steps completed"
                color="azure06"
                step-number="7"
                value="3"
                completed-label="5 days overdue"
                progress-color="ruby02"
              >
                <ids-icon slot="icon" icon="alert"></ids-icon>
              </ids-step-chart>
              <ids-step-chart
                class="chart"
                label="2 of 7 steps completed"
                color="azure06"
                step-number="7"
                value="2"
              ></ids-step-chart>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsStepChart;
