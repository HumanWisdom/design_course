import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalSharingS02Page } from './journal-sharing-s02.page';

describe('JournalSharingS02Page', () => {
  let component: JournalSharingS02Page;
  let fixture: ComponentFixture<JournalSharingS02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalSharingS02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalSharingS02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
