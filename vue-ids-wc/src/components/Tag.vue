<template>
  <div>
    <h1>Tag Component</h1>
    <ids-layout-grid>
      <ids-layout-column>
        <ids-tag
          v-for="(tag, index) in tagList"
          :key="index"
          :color="tag.color"
        >{{ tag.label }}</ids-tag>
      </ids-layout-column>
    </ids-layout-grid>
  </div>
</template>

<script>
import "ids-enterprise-wc/ids-layout-grid/ids-layout-grid.js";
import "ids-enterprise-wc/ids-label/ids-label.js";
import "ids-enterprise-wc/ids-icon/ids-icon.js";
import "ids-enterprise-wc/ids-tag/ids-tag.js";

const data = [
  { label: "Normal Tag", color: "" },
  { label: "Secondary Tag", color: "secondary" },
  { label: "Error Tag", color: "error" },
  { label: "Success Tag", color: "success" },
  { label: "Warning Tag", color: "caution" },
  { label: "Custom Tag Color", color: "#EDE3FC" }
];

export default {
  name: "IdsTagWc",
  data: function() {
    return {
      tagList: [...data]
    };
  },
  props: {
    tagTitle: String
  }
};
</script>

<style scoped lang="scss">
</style>
