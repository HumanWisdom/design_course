import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardMainPage } from './dashboard-main.page';

describe('DashboardMainPage', () => {
  let component: DashboardMainPage;
  let fixture: ComponentFixture<DashboardMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
