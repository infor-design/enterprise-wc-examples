import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsActionSheetComponent } from './ids-action-sheet.component';

describe('IdsActionSheetComponent', () => {
  let component: IdsActionSheetComponent;
  let fixture: ComponentFixture<IdsActionSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsActionSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsActionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
