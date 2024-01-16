import { Component, AfterViewInit } from '@angular/core';
import { routes } from './ids-pie-chart-routing.module';

@Component({
    selector: 'app-ids-pie-chart',
    templateUrl: './ids-pie-chart.component.html',
    styleUrls: ['./ids-pie-chart.component.css']
})
export class IdsPieChartComponent implements AfterViewInit {
    public routes = routes.filter(r => r.path !== '');

    constructor() { }

    ngAfterViewInit(): void {
        console.log('Ids Pie Chart init');
    }

}
