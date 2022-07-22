import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsAboutComponent } from './ids-about.component';

describe('IdsAboutComponent', () => {
  let component: IdsAboutComponent;
  let fixture: ComponentFixture<IdsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
