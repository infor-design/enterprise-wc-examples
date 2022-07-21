import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsSkipLinkComponent } from './ids-skip-link.component';

describe('IdsSkipLinkComponent', () => {
  let component: IdsSkipLinkComponent;
  let fixture: ComponentFixture<IdsSkipLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsSkipLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsSkipLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
