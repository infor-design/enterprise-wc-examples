<script>
    import 'ids-enterprise-wc';
    // import 'ids-enterprise-wc/components/ids-tag/ids-tag.js';

    const TAG_COLORS = [
        { name: 'Default', value: '' },
        { name: 'Secondary', value: 'secondary' },
        { name: 'Error', value: 'error' },
        { name: 'Success', value: 'success' },
        { name: 'Warning', value: 'warning' },
        { name: 'Custom Color 1', value: '#ede3fc' }
    ];

    const dashCase = (val = '') => {
        return val.toLowerCase().split(' ').join('-');
    };

    export let text = '';
    export let color = TAG_COLORS[0].value;
    export let dismissible = true;
    export let clickable = true;
</script>

<ids-tag
    clickable={clickable}
    color={color} 
    dismissible={dismissible}>{text}</ids-tag>