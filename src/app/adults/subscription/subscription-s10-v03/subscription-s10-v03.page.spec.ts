import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscriptionS10V03Page } from './subscription-s10-v03.page';

describe('SubscriptionS10V03Page', () => {
  let component: SubscriptionS10V03Page;
  let fixture: ComponentFixture<SubscriptionS10V03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionS10V03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionS10V03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
