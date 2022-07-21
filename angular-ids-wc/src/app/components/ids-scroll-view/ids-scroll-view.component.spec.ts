import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsScrollViewComponent } from './ids-scroll-view.component';

describe('IdsScrollViewComponent', () => {
  let component: IdsScrollViewComponent;
  let fixture: ComponentFixture<IdsScrollViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsScrollViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsScrollViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
