import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-upload/ids-upload';


const IdsUpload = () => {
  return (
    <>
      <IdsTitle>Ids Upload Example</IdsTitle>

      <ids-layout-grid auto-fit="true" gap="md" padding-x="md">
        <ids-layout-grid-cell>
          <ids-upload label="Single File"></ids-upload>
          <ids-upload label="Multiple Files" multiple="true"></ids-upload>
          <ids-upload
            label="Multiple Files Accept (.cvs,.xls,.xlsx)"
            multiple="true"
            accept=".cvs,.xls,.xlsx"
          ></ids-upload>
          <ids-upload label="Readonly" readonly="true"></ids-upload>
          <ids-upload
            label="Disabled"
            disabled="true"
            value="Readme.txt"
          ></ids-upload>
          <ids-upload label="Dirty Tracker" dirty-tracker="true"></ids-upload>
          <ids-upload label="Required" validate="required"></ids-upload>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsUpload;
