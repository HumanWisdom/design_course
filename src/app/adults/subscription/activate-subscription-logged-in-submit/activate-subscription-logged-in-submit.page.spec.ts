import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInSubmitPage } from './activate-subscription-logged-in-submit.page';

describe('ActivateSubscriptionLoggedInSubmitPage', () => {
  let component: ActivateSubscriptionLoggedInSubmitPage;
  let fixture: ComponentFixture<ActivateSubscriptionLoggedInSubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionLoggedInSubmitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionLoggedInSubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
