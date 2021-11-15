import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HwpProjectsPage } from './hwp-projects.page';

describe('HwpProjectsPage', () => {
  let component: HwpProjectsPage;
  let fixture: ComponentFixture<HwpProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwpProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HwpProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
