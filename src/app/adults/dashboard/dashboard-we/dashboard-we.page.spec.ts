import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardWePage } from './dashboard-we.page';

describe('DashboardWePage', () => {
  let component: DashboardWePage;
  let fixture: ComponentFixture<DashboardWePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardWePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
