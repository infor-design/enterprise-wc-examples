import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsLayoutGridComponent } from './ids-layout-grid.component';

describe('IdsLayoutGridComponent', () => {
  let component: IdsLayoutGridComponent;
  let fixture: ComponentFixture<IdsLayoutGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdsLayoutGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdsLayoutGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
