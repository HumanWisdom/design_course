import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardV02Page } from './dashboard-v02.page';

describe('DashboardV02Page', () => {
  let component: DashboardV02Page;
  let fixture: ComponentFixture<DashboardV02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardV02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardV02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
