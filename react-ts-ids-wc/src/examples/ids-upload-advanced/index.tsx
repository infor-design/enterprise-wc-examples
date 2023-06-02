import React, { useRef, useEffect } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsUploadAdvancedType from 'ids-enterprise-wc/components/ids-upload-advanced/ids-upload-advanced';
import 'ids-enterprise-wc/components/ids-upload-advanced/ids-upload-advanced';


const IdsUploadAdvanced = () => {
  const extraHeadersRef = useRef<IdsUploadAdvancedType>();

  useEffect(() => {
    extraHeadersRef.current?.insertAdjacentHTML(
      'beforeend',
      '<span slot="xhr-headers">[{ "name": "header1", "value": "header1-value" }]</span>'
    );
  }, []);

  return (
    <>
      <IdsTitle>Ids Upload Advanced Example</IdsTitle>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-text>
            <strong>
              To slow down the upload use Chrome dev tools network tab, also if
              this example is statically deployed on a test server the upload
              will fail. To see this working run locally.
            </strong>
          </ids-text>
        </IdsGridCell>
      </IdsGrid>

      <IdsGrid cols="3" gap="md">
        <IdsGridCell>
          <ids-text>Basic</ids-text>
          <ids-upload-advanced url="http://localhost:3000/upload"></ids-upload-advanced>
        </IdsGridCell>

        <IdsGridCell>
          <ids-text>Disabled</ids-text>
          <ids-upload-advanced
            disabled="true"
            url="http://localhost:3000/upload"
          ></ids-upload-advanced>
        </IdsGridCell>

        <IdsGridCell>
          <ids-text>Images &amp; PDF Only, Max (5) files</ids-text>
          <ids-upload-advanced
            accept="image/*, .pdf"
            max-files="5"
            url="http://localhost:3000/upload"
          ></ids-upload-advanced>
        </IdsGridCell>

        <IdsGridCell>
          <ids-text>Extra Headers to send with XHR</ids-text>
          <ids-upload-advanced
            ref={extraHeadersRef}
            url="http://localhost:3000/upload"
          ></ids-upload-advanced>
        </IdsGridCell>

        <IdsGridCell>
          <ids-text>Custom Send Method</ids-text>
          <ids-upload-advanced></ids-upload-advanced>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsUploadAdvanced;
