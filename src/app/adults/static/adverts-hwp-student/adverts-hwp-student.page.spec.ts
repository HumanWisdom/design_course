import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvertsHwpStudentPage } from './adverts-hwp-student.page';

describe('AdvertsHwpStudentPage', () => {
  let component: AdvertsHwpStudentPage;
  let fixture: ComponentFixture<AdvertsHwpStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsHwpStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertsHwpStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
