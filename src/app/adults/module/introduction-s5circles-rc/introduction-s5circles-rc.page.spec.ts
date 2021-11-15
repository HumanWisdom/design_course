import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductionS5circlesRcPage } from './introduction-s5circles-rc.page';

describe('IntroductionS5circlesRcPage', () => {
  let component: IntroductionS5circlesRcPage;
  let fixture: ComponentFixture<IntroductionS5circlesRcPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionS5circlesRcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionS5circlesRcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
