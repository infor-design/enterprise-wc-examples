import '../ids-list-view';
import productsJSON from '../../../assets/data/products-100.json';
// Supporting components
import '../../ids-badge/ids-badge';
import '../../ids-card/ids-card';
import '../../ids-hyperlink/ids-hyperlink';
import '../../ids-image/ids-image';
import '../../ids-layout-flex/ids-layout-flex';
import '../../ids-hidden/ids-hidden';
import IdsImg10 from '../../../assets/images/10.jpg';
import placeHolderImg154120 from '../../../assets/images/placeholder-154x120.png';
// Add total price to given data (helper method)
const totalPrice = (data) => data.map((d) => ({
    ...d,
    totalPrice: Number((parseFloat(d.units) * d.unitPrice)).toLocaleString('en', {
        minimumFractionDigits: 2
    })
}));
// Add some extra key/value to few noeds to demo
const extra = (data) => {
    data[1].inStock = false;
    data[3].imgStatus = 'images/10.jpg';
    data[4].imgSrc = 'images/placeholder-154x120.png';
    return data;
};
// Example for populating the List View
const listView = document.querySelector('#demo-lv-embellishment');
// Do an ajax request and apply the data to the list
const url = productsJSON;
const setData = async () => {
    const res = await fetch(url);
    let data = await res.json();
    data = extra(data);
    data = totalPrice(data);
    listView.data = data;
    // images
    [...listView.container.querySelectorAll('.ids-img-10')].forEach((img) => {
        img.src = IdsImg10;
    });
    [...listView.container.querySelectorAll('.placeholder-154-120')].forEach((img) => {
        img.src = placeHolderImg154120;
    });
};
setData();
//# sourceMappingURL=embellishment.js.map