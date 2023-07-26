import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindAnswersAnswersPage } from './find-answers-answers.page';

describe('FindAnswersAnswersPage', () => {
  let component: FindAnswersAnswersPage;
  let fixture: ComponentFixture<FindAnswersAnswersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAnswersAnswersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindAnswersAnswersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
