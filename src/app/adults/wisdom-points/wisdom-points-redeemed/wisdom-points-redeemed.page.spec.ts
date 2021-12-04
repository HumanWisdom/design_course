import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomPointsRedeemedPage } from './wisdom-points-redeemed.page';

describe('WisdomPointsRedeemedPage', () => {
  let component: WisdomPointsRedeemedPage;
  let fixture: ComponentFixture<WisdomPointsRedeemedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomPointsRedeemedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomPointsRedeemedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
