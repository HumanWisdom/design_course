import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreePartnerPage } from './tree-partner.page';

describe('TreePartnerPage', () => {
  let component: TreePartnerPage;
  let fixture: ComponentFixture<TreePartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreePartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreePartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
