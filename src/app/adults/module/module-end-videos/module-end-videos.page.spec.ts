import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleEndVideosPage } from './module-end-videos.page';

describe('ModuleEndVideosPage', () => {
  let component: ModuleEndVideosPage;
  let fixture: ComponentFixture<ModuleEndVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleEndVideosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleEndVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
