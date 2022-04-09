import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardModuleTranscriptPage } from './dashboard-module-transcript.page';

describe('DashboardModuleTranscriptPage', () => {
  let component: DashboardModuleTranscriptPage;
  let fixture: ComponentFixture<DashboardModuleTranscriptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardModuleTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardModuleTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
