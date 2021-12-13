import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInCodePage } from './activate-subscription-logged-in-code.page';

describe('ActivateSubscriptionLoggedInCodePage', () => {
  let component: ActivateSubscriptionLoggedInCodePage;
  let fixture: ComponentFixture<ActivateSubscriptionLoggedInCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionLoggedInCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionLoggedInCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
