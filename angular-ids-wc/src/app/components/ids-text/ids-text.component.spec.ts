import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsTextComponent } from './ids-text.component';

describe('IdsTextComponent', () => {
  let component: IdsTextComponent;
  let fixture: ComponentFixture<IdsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
