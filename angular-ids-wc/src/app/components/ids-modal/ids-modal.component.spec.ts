import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsModalComponent } from './ids-modal.component';

describe('IdsModalComponent', () => {
  let component: IdsModalComponent;
  let fixture: ComponentFixture<IdsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
