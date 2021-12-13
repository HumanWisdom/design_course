import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInCodeInvalidPage } from './activate-subscription-logged-in-code-invalid.page';

describe('ActivateSubscriptionLoggedInCodeInvalidPage', () => {
  let component: ActivateSubscriptionLoggedInCodeInvalidPage;
  let fixture: ComponentFixture<ActivateSubscriptionLoggedInCodeInvalidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionLoggedInCodeInvalidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionLoggedInCodeInvalidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
