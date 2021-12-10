import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionUnregisteredPage } from './activate-subscription-unregistered.page';

describe('ActivateSubscriptionUnregisteredPage', () => {
  let component: ActivateSubscriptionUnregisteredPage;
  let fixture: ComponentFixture<ActivateSubscriptionUnregisteredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionUnregisteredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionUnregisteredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
