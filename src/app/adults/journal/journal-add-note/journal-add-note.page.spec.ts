import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalAddNotePage } from './journal-add-note.page';

describe('JournalAddNotePage', () => {
  let component: JournalAddNotePage;
  let fixture: ComponentFixture<JournalAddNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalAddNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalAddNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
