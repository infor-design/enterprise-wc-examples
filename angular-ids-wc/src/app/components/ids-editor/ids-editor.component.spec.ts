import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsEditorComponent } from './ids-editor.component';

describe('IdsEditorComponent', () => {
  let component: IdsEditorComponent;
  let fixture: ComponentFixture<IdsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
