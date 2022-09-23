import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsSwaplistComponent } from './ids-swaplist.component';

describe('IdsSwaplistComponent', () => {
  let component: IdsSwaplistComponent;
  let fixture: ComponentFixture<IdsSwaplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsSwaplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsSwaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
