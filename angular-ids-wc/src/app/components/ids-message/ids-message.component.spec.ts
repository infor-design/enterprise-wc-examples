import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsMessageComponent } from './ids-message.component';

describe('IdsMessageComponent', () => {
  let component: IdsMessageComponent;
  let fixture: ComponentFixture<IdsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
