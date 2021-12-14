import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupAffiliatePage } from './signup-affiliate.page';

describe('SignupAffiliatePage', () => {
  let component: SignupAffiliatePage;
  let fixture: ComponentFixture<SignupAffiliatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAffiliatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupAffiliatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
