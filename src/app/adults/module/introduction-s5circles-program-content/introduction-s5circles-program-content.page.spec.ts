import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductionS5circlesProgramContentPage } from './introduction-s5circles-program-content.page';

describe('IntroductionS5circlesProgramContentPage', () => {
  let component: IntroductionS5circlesProgramContentPage;
  let fixture: ComponentFixture<IntroductionS5circlesProgramContentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionS5circlesProgramContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionS5circlesProgramContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
