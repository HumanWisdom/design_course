import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindInspirationPage } from './find-inspiration.page';

describe('FindInspirationPage', () => {
  let component: FindInspirationPage;
  let fixture: ComponentFixture<FindInspirationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindInspirationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindInspirationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
