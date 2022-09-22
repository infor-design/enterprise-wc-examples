import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsBlockGridComponent } from './ids-block-grid.component';

describe('IdsBlockGridComponent', () => {
  let component: IdsBlockGridComponent;
  let fixture: ComponentFixture<IdsBlockGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsBlockGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsBlockGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
