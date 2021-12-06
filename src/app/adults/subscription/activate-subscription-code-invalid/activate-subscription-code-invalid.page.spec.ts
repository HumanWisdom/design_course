import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionCodeInvalidPage } from './activate-subscription-code-invalid.page';

describe('ActivateSubscriptionCodeInvalidPage', () => {
  let component: ActivateSubscriptionCodeInvalidPage;
  let fixture: ComponentFixture<ActivateSubscriptionCodeInvalidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateSubscriptionCodeInvalidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateSubscriptionCodeInvalidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
