<script lang="ts">
  import IdsHyperLink from '../../components/ids-hyperlink/IdsHyperLink.svelte';
  import type IdsButton from '../../components/ids-button/IdsButton.svelte';

  let ref: IdsHyperLink;

  // Generates the buttons with linking information
  const links = [
    { href: 'https://www.infor.com', buttonText: 'Use Infor.com', linkText: 'Open Infor.com!' },
    { href: 'https://www.google.com', buttonText: 'Use Google', linkText: 'Open Google!' },
    { href: 'https://www.duckduckgo.com', buttonText: 'Use DuckDuckGo', linkText: 'Open DuckDuckGo!' },
    { href: '', buttonText: 'Do nothing', linkText: 'Goes Nowhere' }
  ]
  const getLastLink = () => links[links.length - 1];

  let displayedHyperlinkText = getLastLink().linkText;

  // Prevents any real navigation from occuring,
  // but logs the hyperlink's target URL if it's set
  const handleClick = (e: MouseEvent): any => {
    e.preventDefault();
    const target = (e.target as unknown as IdsHyperLink);

    if (target.href) {
      console.info(`Clicked hyperlink will go to ${target.href}`);
    } else {
      console.info(`Clicked hyperlink will go nowhere`);
    }
  }

  const handleHrefChange = (e: CustomEvent): any => {
    const target = (e.target as unknown as IdsButton); // IdsButton
    if (ref && target) {
      ref.href = target.dataset.href;
      displayedHyperlinkText = target.dataset.linkText;
    }
  }
</script>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">IdsHyperlink (Svelte Component)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <ids-text>Use the buttons below to set a URL on the link before clicking. <br/>
    Using the link won't cause the page to change, but the URL will be logged to the console.</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    <IdsHyperLink
      textDecoration="hover"
      bind:this={ref}
      on:click={handleClick}>{ displayedHyperlinkText }</IdsHyperLink>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid auto="true">
  <ids-layout-grid-cell>
    {#each links as link}
      <ids-button 
        type="secondary"
        data-href={link.href}
        data-link-text={link.linkText}
        on:click={handleHrefChange}>{link.buttonText}</ids-button>&nbsp;
    {/each}
  </ids-layout-grid-cell>
</ids-layout-grid>