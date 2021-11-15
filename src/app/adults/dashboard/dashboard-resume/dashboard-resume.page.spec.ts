import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardResumePage } from './dashboard-resume.page';

describe('DashboardResumePage', () => {
  let component: DashboardResumePage;
  let fixture: ComponentFixture<DashboardResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResumePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
