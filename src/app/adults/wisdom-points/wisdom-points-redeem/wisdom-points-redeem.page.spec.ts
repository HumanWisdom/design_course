import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomPointsRedeemPage } from './wisdom-points-redeem.page';

describe('WisdomPointsRedeemPage', () => {
  let component: WisdomPointsRedeemPage;
  let fixture: ComponentFixture<WisdomPointsRedeemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomPointsRedeemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomPointsRedeemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
