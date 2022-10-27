import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsVirtualScrollComponent } from './ids-virtual-scroll.component';

describe('IdsVirtualScrollComponent', () => {
  let component: IdsVirtualScrollComponent;
  let fixture: ComponentFixture<IdsVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsVirtualScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
