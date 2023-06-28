import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveYourBestLifePage } from './live-your-best-life.page';

describe('LiveYourBestLifePage', () => {
  let component: LiveYourBestLifePage;
  let fixture: ComponentFixture<LiveYourBestLifePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveYourBestLifePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveYourBestLifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
