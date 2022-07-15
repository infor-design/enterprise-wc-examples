import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsEditorExampleComponent } from './ids-editor-example.component';

describe('IdsEditorExampleComponent', () => {
  let component: IdsEditorExampleComponent;
  let fixture: ComponentFixture<IdsEditorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsEditorExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsEditorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
