import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsEmptyMessageComponent } from './ids-empty-message.component';

describe('IdsEmptyMessageComponent', () => {
  let component: IdsEmptyMessageComponent;
  let fixture: ComponentFixture<IdsEmptyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsEmptyMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsEmptyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
