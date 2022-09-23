import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsTabsComponent } from './ids-tabs.component';

describe('IdsTabComponent', () => {
  let component: IdsTabsComponent;
  let fixture: ComponentFixture<IdsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
