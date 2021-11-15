import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileLandingPage } from './profile-landing.page';

describe('ProfileLandingPage', () => {
  let component: ProfileLandingPage;
  let fixture: ComponentFixture<ProfileLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLandingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
