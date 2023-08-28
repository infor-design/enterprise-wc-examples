<template>
  <ids-container language="en" locale="en-US" padding="8">
    <ids-layout-grid auto-fit="true">
      <ids-layout-grid-cell>
        <ids-text font-size="12">{{ title1 }}</ids-text>
      </ids-layout-grid-cell>
    </ids-layout-grid>
    <ids-layout-grid auto-fit="true">
      <ids-layout-grid-cell>
        <ids-tag v-for="(tag, index) in tagList" :key="index" :color="tag.color">{{ tag.label }}</ids-tag>
      </ids-layout-grid-cell>
    </ids-layout-grid>

    <ids-layout-grid  auto="true">
      <ids-layout-grid-cell>
        <ids-text font-size="12">{{ title2 }}</ids-text>
      </ids-layout-grid-cell>
    </ids-layout-grid>
    <ids-layout-grid  auto="true">
     <ids-layout-grid-cell>
        <ids-tag dismissible="true" v-on:click="onTagRemoved">NormalTag</ids-tag>
      </ids-layout-grid-cell>
    </ids-layout-grid>

   <ids-layout-grid auto-fit="true">
      <ids-layout-grid-cell>
        <ids-text font-size="12">{{ title3 }}</ids-text>
      </ids-layout-grid-cell>
   </ids-layout-grid>
     <ids-layout-grid auto-fit="true">
      <ids-layout-grid-cell>
        <ids-dropdown id="dropdown-1" label="Normal Dropdown with Dirty Tracker" :value="dropdownValue" dirty-tracker="true">
          <ids-list-box>
            <ids-list-box-option id="al" value="al">Alabama</ids-list-box-option>
            <ids-list-box-option id="ak" value="ak">Alaska</ids-list-box-option>
            <ids-list-box-option id="az" value="az">Arizona</ids-list-box-option>
            <ids-list-box-option id="ar" value="ar">Arkansas</ids-list-box-option>
            <ids-list-box-option id="ca" value="ca" selected>California</ids-list-box-option>
            <ids-list-box-option id="co" value="co">Colorado</ids-list-box-option>
            <ids-list-box-option id="ct" value="ct">Connecticut</ids-list-box-option>
            <ids-list-box-option id="de" value="de">Delaware</ids-list-box-option>
            <ids-list-box-option id="dc" value="dc">District Of Columbia</ids-list-box-option>
            <ids-list-box-option id="fl" value="fl">Florida</ids-list-box-option>
            <ids-list-box-option id="ga" value="ga">Georgia</ids-list-box-option>
            <ids-list-box-option id="hi" value="hi">Hawaii</ids-list-box-option>
            <ids-list-box-option id="id" value="id">Idaho</ids-list-box-option>
            <ids-list-box-option id="il" value="il">Illinois</ids-list-box-option>
            <ids-list-box-option id="in" value="in">Indiana</ids-list-box-option>
            <ids-list-box-option id="ia" value="ia">Iowa</ids-list-box-option>
            <ids-list-box-option id="ks" value="ks">Kansas</ids-list-box-option>
            <ids-list-box-option id="ky" value="ky">Kentucky</ids-list-box-option>
            <ids-list-box-option id="la" value="la">Louisiana</ids-list-box-option>
            <ids-list-box-option id="me" value="me">Maine</ids-list-box-option>
            <ids-list-box-option id="md" value="md">Maryland</ids-list-box-option>
            <ids-list-box-option id="ma" value="ma">Massachusetts</ids-list-box-option>
            <ids-list-box-option id="mi" value="mi">Michigan</ids-list-box-option>
            <ids-list-box-option id="mn" value="mn">Minnesota</ids-list-box-option>
            <ids-list-box-option id="ms" value="ms">Mississippi</ids-list-box-option>
            <ids-list-box-option id="mo" value="mo">Missouri</ids-list-box-option>
            <ids-list-box-option id="mt" value="mt">Montana</ids-list-box-option>
            <ids-list-box-option id="ne" value="ne">Nebraska</ids-list-box-option>
            <ids-list-box-option id="nv" value="nv">Nevada</ids-list-box-option>
            <ids-list-box-option id="nh" value="nh">New Hampshire</ids-list-box-option>
            <ids-list-box-option id="nj" value="nj">New Jersey</ids-list-box-option>
            <ids-list-box-option id="nm" value="nm">New Mexico</ids-list-box-option>
            <ids-list-box-option id="ny" value="ny">New York</ids-list-box-option>
            <ids-list-box-option id="nc" value="nc">North Carolina</ids-list-box-option>
            <ids-list-box-option id="nd" value="nd">North Dakota</ids-list-box-option>
            <ids-list-box-option id="oh" value="oh">Ohio</ids-list-box-option>
            <ids-list-box-option id="ok" value="ok">Oklahoma</ids-list-box-option>
            <ids-list-box-option id="or" value="or">Oregon</ids-list-box-option>
            <ids-list-box-option id="pa" value="pa">Pennsylvania</ids-list-box-option>
            <ids-list-box-option id="ri" value="ri">Rhode Island</ids-list-box-option>
            <ids-list-box-option id="sc" value="sc">South Carolina</ids-list-box-option>
            <ids-list-box-option id="sd" value="sd">South Dakota</ids-list-box-option>
            <ids-list-box-option id="tn" value="tn">Tennessee</ids-list-box-option>
            <ids-list-box-option id="tx" value="tx">Texas</ids-list-box-option>
            <ids-list-box-option id="ut" value="ut">Utah</ids-list-box-option>
            <ids-list-box-option id="vt" value="vt">Vermont</ids-list-box-option>
            <ids-list-box-option id="va" value="va">Virginia</ids-list-box-option>
            <ids-list-box-option id="wa" value="wa">Washington</ids-list-box-option>
            <ids-list-box-option id="wv" value="wv">West Virginia</ids-list-box-option>
            <ids-list-box-option id="wi" value="wi">Wisconsin</ids-list-box-option>
            <ids-list-box-option id="wy" value="wy">Wyoming</ids-list-box-option>
          </ids-list-box>
        </ids-dropdown>
      </ids-layout-grid-cell>
    </ids-layout-grid>

  </ids-container>
</template>

<script>

import 'ids-enterprise-wc/components/ids-container/ids-container.js';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text/ids-text';
import 'ids-enterprise-wc/components/ids-icon/ids-icon';
import 'ids-enterprise-wc/components/ids-tag/ids-tag';
import 'ids-enterprise-wc/components/ids-dropdown/ids-dropdown';
import 'ids-enterprise-wc/components/ids-list-box/ids-list-box.js';

const data = [
  { label: 'Normal Tag', color: '' },
  { label: 'Secondary Tag', color: 'secondary' },
  { label: 'Error Tag', color: 'error' },
  { label: 'Success Tag', color: 'success' },
  { label: 'Warning Tag', color: 'caution' },
  { label: 'Custom Tag Color', color: '#EDE3FC' }
];

export default {
  name: 'IdsTagTestPage',
  data: function() {
    return {
      tagList: [...data],
      title1: 'Normal Tags',
      title2: 'Dismissible Tags',
      title3: 'Dropdown',
      dropdownValue: 'ca'
    };
  },
  methods: {
    onTagRemoved: function(event) {
      console.log('Tag Removed', event);
    }
  },
  props: {
    tagTitle: String,
    value: String
  }
};
</script>

<style scoped lang='scss'>
</style>
