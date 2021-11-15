import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyMessageV01Page } from './daily-message-v01.page';

describe('DailyMessageV01Page', () => {
  let component: DailyMessageV01Page;
  let fixture: ComponentFixture<DailyMessageV01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyMessageV01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyMessageV01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
