import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsTreeComponent } from './ids-tree.component';

describe('IdsTreeComponent', () => {
  let component: IdsTreeComponent;
  let fixture: ComponentFixture<IdsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
