import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsPieChartComponent } from './ids-pie-chart.component';

describe('IdsPieChartComponent', () => {
    let component: IdsPieChartComponent;
    let fixture: ComponentFixture<IdsPieChartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsPieChartComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(IdsPieChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
