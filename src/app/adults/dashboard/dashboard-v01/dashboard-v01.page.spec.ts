import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardV01Page } from './dashboard-v01.page';

describe('DashboardV01Page', () => {
  let component: DashboardV01Page;
  let fixture: ComponentFixture<DashboardV01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardV01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardV01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
