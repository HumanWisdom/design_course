import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionCongratulationsPage } from './activate-subscription-congratulations.page';

describe('ActivateSubscriptionCongratulationsPage', () => {
  let component: ActivateSubscriptionCongratulationsPage;
  let fixture: ComponentFixture<ActivateSubscriptionCongratulationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionCongratulationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionCongratulationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
