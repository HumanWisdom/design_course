import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedbackSurveyIndexPage } from './feedback-survey-index.page';

describe('FeedbackSurveyIndexPage', () => {
  let component: FeedbackSurveyIndexPage;
  let fixture: ComponentFixture<FeedbackSurveyIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSurveyIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackSurveyIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
