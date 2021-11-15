import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomStoriesStorySubmitPage } from './wisdom-stories-story-submit.page';

describe('WisdomStoriesStorySubmitPage', () => {
  let component: WisdomStoriesStorySubmitPage;
  let fixture: ComponentFixture<WisdomStoriesStorySubmitPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomStoriesStorySubmitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomStoriesStorySubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
