import { Component } from '@angular/core';

type Product = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-dropdown-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {
  productConnections: Product[] = [
    {
      id: '1',
      name: 'Product 1',
    },
    {
      id: '2',
      name: 'Product 2',
    },
    {
      id: '3',
      name: 'Product 3',
    },
  ];

  selectedConnection = this.productConnections[2];

  // Fake it to make it compile
  lang = {
    get(key: string) {
      return 'Label';
    },
  };

  onSelectConnection(product: Product) {
    this.selectedConnection = product;
  }
}
