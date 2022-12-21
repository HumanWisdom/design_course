import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactCoachPage } from './contact-coach.page';

describe('ContactCoachPage', () => {
  let component: ContactCoachPage;
  let fixture: ComponentFixture<ContactCoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCoachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactCoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
