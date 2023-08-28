import useEvent from '../../hooks/useEvent';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import 'ids-enterprise-wc/components/ids-tag/ids-tag';


const IdsTag = () => {

  // Event handler to be used in attach and cleanup event listener
  const handleTagRemove = (e: any) => {
    console.log('Tag Removed:', e?.detail?.elem?.textContent);
  };

  const dismissibleTagRef = useEvent('tagremove', handleTagRemove);

  return (
    <>
      <IdsGrid auto-fit>
        <ids-text font-size="12">Tags</ids-text>
      </IdsGrid>

      <IdsGrid auto-fit>
        <IdsGridCell>
          <ids-tag>Normal Tag</ids-tag>
          <ids-tag color="secondary">Secondary Tags</ids-tag>
          <ids-tag color="success">Success Tag</ids-tag>
          <ids-tag color="info">Info Tag</ids-tag>
          <ids-tag color="warning">Warning Tag</ids-tag>
          <ids-tag color="error">Error Tag</ids-tag>
          <ids-tag color="#5CC6C7">Custom Tag Color</ids-tag>
          <ids-tag clickable="true">
            Clickable Tag
            <ids-icon icon="caret-right" size="xsmall"></ids-icon>
          </ids-tag>
          <ids-tag dismissible="true">
            <span>Dismissible Tag 1</span>
            <ids-icon
              icon="close"
              size="xsmall"
            ></ids-icon>
          </ids-tag>
          <ids-tag dismissible="true" ref={dismissibleTagRef}>
            <span>Dismissible Tag 2</span>
          </ids-tag>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsTag;
