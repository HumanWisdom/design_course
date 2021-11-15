import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalLandingV02Page } from './journal-landing-v02.page';

describe('JournalLandingV02Page', () => {
  let component: JournalLandingV02Page;
  let fixture: ComponentFixture<JournalLandingV02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalLandingV02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalLandingV02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
