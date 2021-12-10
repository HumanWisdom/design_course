import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionRegisteredPage } from './activate-subscription-registered.page';

describe('ActivateSubscriptionRegisteredPage', () => {
  let component: ActivateSubscriptionRegisteredPage;
  let fixture: ComponentFixture<ActivateSubscriptionRegisteredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionRegisteredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionRegisteredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
