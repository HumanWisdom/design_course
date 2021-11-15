import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyMessageV02Page } from './daily-message-v02.page';

describe('DailyMessageV02Page', () => {
  let component: DailyMessageV02Page;
  let fixture: ComponentFixture<DailyMessageV02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyMessageV02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyMessageV02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
