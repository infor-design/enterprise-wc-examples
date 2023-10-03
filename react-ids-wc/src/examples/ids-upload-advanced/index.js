import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-upload-advanced/ids-upload-advanced';


const IdsUploadAdvanced = () => {
  const extraHeadersRef = useRef();

  useEffect(() => {
    extraHeadersRef.current.insertAdjacentHTML(
      'beforeend',
      '<span slot="xhr-headers">[{ "name": "header1", "value": "header1-value" }]</span>'
    );
  }, []);

  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Upload Advanced
          </ids-text>
          <ids-text>
            <strong>
              To slow down the upload use Chrome dev tools network tab, also if
              this example is statically deployed on a test server the upload
              will fail. To see this working run locally.
            </strong>
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-text>Basic</ids-text>
          <ids-upload-advanced url="http://localhost:3000/upload"></ids-upload-advanced>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-text>Disabled</ids-text>
          <ids-upload-advanced
            disabled="true"
            url="http://localhost:3000/upload"
          ></ids-upload-advanced>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-text>Images &amp; PDF Only, Max (5) files</ids-text>
          <ids-upload-advanced
            accept="image/*, .pdf"
            max-files="5"
            url="http://localhost:3000/upload"
          ></ids-upload-advanced>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-text>Extra Headers to send with XHR</ids-text>
          <ids-upload-advanced
            ref={extraHeadersRef}
            url="http://localhost:3000/upload"
          ></ids-upload-advanced>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-text>Custom Send Method</ids-text>
          <ids-upload-advanced></ids-upload-advanced>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsUploadAdvanced;
