import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeExercisePage } from './we-exercise.page';

describe('WeExercisePage', () => {
  let component: WeExercisePage;
  let fixture: ComponentFixture<WeExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeExercisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
