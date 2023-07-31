import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-empty-message/ids-empty-message';

const IdsEmptyMessage = () => {
  return (
    <>
      <IdsTitle>Empty Message Icons Example</IdsTitle>

      <IdsGrid cols="3" gap="md" class="icon-examples"></IdsGrid>
      <IdsGrid auto-fit>
        <ids-text font-size="12" type="h1">
          Display Options
        </ids-text>
      </IdsGrid>
      <IdsGrid cols="3" gap="md">
        <IdsGridCell>
          <ids-card auto-height="true">
            <div className="card-content" slot="card-content">
              <ids-empty-message icon="empty-no-tasks-new">
                <ids-text type="h2" font-size="20" label="true" slot="label">
                  Document Management
                </ids-text>
                <ids-text label="true" slot="description">
                  Description of empty message that explains why and possible contain a hyperlink.
                </ids-text>
                <ids-button class="action-button" slot="button" appearance="primary">
                  <span>Action</span>
                </ids-button>
              </ids-empty-message>
            </div>
          </ids-card>
        </IdsGridCell>
        <IdsGridCell>
          <ids-card auto-height="true">
            <div className="card-content" slot="card-content">
              <ids-empty-message icon="empty-new-project-new">
                <ids-text type="h2" font-size="20" label="true" slot="label">
                  Portal
                </ids-text>
                <ids-text label="true" slot="description">
                  Description of empty message that explains why and possible contain a hyperlink.
                </ids-text>
              </ids-empty-message>
            </div>
          </ids-card>
        </IdsGridCell>
        <IdsGridCell>
          <ids-card auto-height="true">
            <div className="card-content" slot="card-content">
              <ids-empty-message icon="empty-no-data-new">
                <ids-text type="h2" font-size="20" label="true" slot="label">
                  Security
                </ids-text>
                <ids-text label="true" slot="description">
                  Description of empty message that explains why and possible contain a hyperlink.
                </ids-text>
              </ids-empty-message>
            </div>
          </ids-card>
        </IdsGridCell>
        <IdsGridCell>
          <ids-card auto-height="true">
            <ids-empty-message class="card-content" slot="card-content" icon="empty-no-events-new">
              <ids-text type="h2" font-size="20" label="true" slot="label">
                API Gateway
              </ids-text>
              <ids-text label="true" slot="description">
                Description of empty message that explains why and possible contain a hyperlink.
              </ids-text>
            </ids-empty-message>
          </ids-card>
        </IdsGridCell>
        <IdsGridCell>
          <ids-empty-message icon="empty-generic-new">
            <ids-text type="h2" font-size="20" label="true" slot="label">
              Security
            </ids-text>
            <ids-text label="true" slot="description">
              Description of empty message that explains why and possible contain a hyperlink.
            </ids-text>
          </ids-empty-message>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsEmptyMessage;
