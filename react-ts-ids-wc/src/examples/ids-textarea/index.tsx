import React from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-textarea/ids-textarea';


const IdsTextarea = () => {
  return (
    <>
      <IdsTitle>Ids Textarea Example</IdsTitle>

      <IdsGrid cols="3" gap="md">
        <IdsGridCell>
          <ids-textarea label="Basic"></ids-textarea>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea label="Disabled" disabled="true">
            Line One
          </ids-textarea>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea label="Readonly" readonly="true">
            Line One
          </ids-textarea>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea label="Autoselect" autoselect="true">
            Text select on focus
          </ids-textarea>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea label="Required" validate="required">
            I will show an error if you clear the value and tab out.
          </ids-textarea>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea label="Dirty Tracking" dirty-tracker="true">
            I will show a dirty indicator if change me and tab out.
          </ids-textarea>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea
            label="Resizable"
            resizable="true"
            placeholder="Type your notes here..."
          ></ids-textarea>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea label="Toggle State" id="textarea-toggle-state">
            Line One
          </ids-textarea>
          <ids-button id="btn-textarea-enable" type="secondary">
            <span>Enable</span>
          </ids-button>
          <ids-button id="btn-textarea-disable" type="secondary">
            <span>Disable</span>
          </ids-button>
          <ids-button id="btn-textarea-readonly" type="secondary">
            <span>Readonly</span>
          </ids-button>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea label="Update Value" id="textarea-update-value">
            Line One
          </ids-textarea>
          <ids-button id="btn-textarea-update-value" type="secondary">
            <span>Update Value</span>
          </ids-button>
          <ids-button id="btn-textarea-reset-value" type="secondary">
            <span>Reset Value</span>
          </ids-button>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid cols="3" gap="md">
        <IdsGridCell>
          <ids-textarea label="Max Length" maxlength="90">
            12345
          </ids-textarea>
          <ids-textarea
            label="Max Length (Custom Text)"
            maxlength="90"
            char-max-text="This text cannot exceed {0} characters."
            char-remaining-text="You can type {0} more characters."
          >
            Line One
          </ids-textarea>
          <ids-textarea
            label="Auto Grow"
            autogrow="true"
            placeholder="Type your notes here..."
          ></ids-textarea>
          <ids-textarea
            label="Auto Grow (Max Height)"
            autogrow="true"
            autogrow-max-height="200"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ids-textarea>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea
            label="Clearable"
            clearable="true"
            placeholder="Clearable textarea..."
          ></ids-textarea>
          <ids-textarea label="Rows" rows="15">
            Line One
          </ids-textarea>
        </IdsGridCell>
        <IdsGridCell>
          <ids-textarea label="Default align (left)">
            Default align
          </ids-textarea>
          <ids-textarea label="Left align" text-align="left">
            Left align
          </ids-textarea>
          <ids-textarea label="Center align" text-align="center">
            Center align
          </ids-textarea>
          <ids-textarea label="Right align" text-align="right">
            Right align
          </ids-textarea>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-textarea
            label="Small"
            size="sm"
            placeholder="Type your notes here..."
          ></ids-textarea>
          <ids-textarea
            label="Medium"
            size="md"
            placeholder="Type your notes here..."
          ></ids-textarea>
          <ids-textarea
            label="Large"
            size="lg"
            placeholder="Type your notes here..."
          ></ids-textarea>
          <ids-textarea
            label="Full"
            size="full"
            placeholder="Type your notes here..."
          ></ids-textarea>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsTextarea;
