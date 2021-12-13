import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInCodeValidPage } from './activate-subscription-logged-in-code-valid.page';

describe('ActivateSubscriptionLoggedInCodeValidPage', () => {
  let component: ActivateSubscriptionLoggedInCodeValidPage;
  let fixture: ComponentFixture<ActivateSubscriptionLoggedInCodeValidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionLoggedInCodeValidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionLoggedInCodeValidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
