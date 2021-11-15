import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleEndV01Page } from './module-end-v01.page';

describe('ModuleEndV01Page', () => {
  let component: ModuleEndV01Page;
  let fixture: ComponentFixture<ModuleEndV01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleEndV01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleEndV01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
