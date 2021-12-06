import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionSuccessfulPage } from './activate-subscription-successful.page';

describe('ActivateSubscriptionSuccessfulPage', () => {
  let component: ActivateSubscriptionSuccessfulPage;
  let fixture: ComponentFixture<ActivateSubscriptionSuccessfulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionSuccessfulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionSuccessfulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
