import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StressImgAudioRcPage } from './stress-img-audio-rc.page';

describe('StressImgAudioRcPage', () => {
  let component: StressImgAudioRcPage;
  let fixture: ComponentFixture<StressImgAudioRcPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StressImgAudioRcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StressImgAudioRcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
