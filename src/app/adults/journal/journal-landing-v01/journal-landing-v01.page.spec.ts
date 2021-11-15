import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalLandingV01Page } from './journal-landing-v01.page';

describe('JournalLandingV01Page', () => {
  let component: JournalLandingV01Page;
  let fixture: ComponentFixture<JournalLandingV01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalLandingV01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalLandingV01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
