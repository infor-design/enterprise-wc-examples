import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsListBuilderComponent } from './ids-list-builder.component';

describe('IdsListBuilderComponent', () => {
  let component: IdsListBuilderComponent;
  let fixture: ComponentFixture<IdsListBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsListBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsListBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
