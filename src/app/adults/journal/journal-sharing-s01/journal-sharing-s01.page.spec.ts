import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalSharingS01Page } from './journal-sharing-s01.page';

describe('JournalSharingS01Page', () => {
  let component: JournalSharingS01Page;
  let fixture: ComponentFixture<JournalSharingS01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalSharingS01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalSharingS01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
