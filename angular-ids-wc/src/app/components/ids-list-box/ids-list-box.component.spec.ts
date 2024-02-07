import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsListBoxComponent } from './ids-list-box.component';

describe('IdsListBoxComponent', () => {
  let component: IdsListBoxComponent;
  let fixture: ComponentFixture<IdsListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsListBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
