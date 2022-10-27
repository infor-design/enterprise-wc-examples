import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsNotificationBannerComponent } from './ids-notification-banner.component';

describe('IdsNotificationBannerComponent', () => {
  let component: IdsNotificationBannerComponent;
  let fixture: ComponentFixture<IdsNotificationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsNotificationBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsNotificationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
