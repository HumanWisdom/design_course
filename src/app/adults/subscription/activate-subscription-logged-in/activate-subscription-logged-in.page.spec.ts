import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInPage } from './activate-subscription-logged-in.page';

describe('ActivateSubscriptionLoggedInPage', () => {
  let component: ActivateSubscriptionLoggedInPage;
  let fixture: ComponentFixture<ActivateSubscriptionLoggedInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionLoggedInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionLoggedInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
