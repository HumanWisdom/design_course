import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalSharingS03Page } from './journal-sharing-s03.page';

describe('JournalSharingS03Page', () => {
  let component: JournalSharingS03Page;
  let fixture: ComponentFixture<JournalSharingS03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalSharingS03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalSharingS03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
