import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomPointsRewardRedeemedPage } from './wisdom-points-reward-redeemed.page';

describe('WisdomPointsRewardRedeemedPage', () => {
  let component: WisdomPointsRewardRedeemedPage;
  let fixture: ComponentFixture<WisdomPointsRewardRedeemedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomPointsRewardRedeemedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomPointsRewardRedeemedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
