import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomPointsRewardRedeemPage } from './wisdom-points-reward-redeem.page';

describe('WisdomPointsRewardRedeemPage', () => {
  let component: WisdomPointsRewardRedeemPage;
  let fixture: ComponentFixture<WisdomPointsRewardRedeemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomPointsRewardRedeemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomPointsRewardRedeemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
