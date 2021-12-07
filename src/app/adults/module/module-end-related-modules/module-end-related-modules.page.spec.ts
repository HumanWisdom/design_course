import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleEndRelatedModulesPage } from './module-end-related-modules.page';

describe('ModuleEndRelatedModulesPage', () => {
  let component: ModuleEndRelatedModulesPage;
  let fixture: ComponentFixture<ModuleEndRelatedModulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleEndRelatedModulesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleEndRelatedModulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
