import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionOtpPage } from './activate-subscription-otp.page';

describe('ActivateSubscriptionOtpPage', () => {
  let component: ActivateSubscriptionOtpPage;
  let fixture: ComponentFixture<ActivateSubscriptionOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
