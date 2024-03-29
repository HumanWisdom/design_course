import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartnershipIndexPage } from './partnership-index.page';

describe('PartnershipIndexPage', () => {
  let component: PartnershipIndexPage;
  let fixture: ComponentFixture<PartnershipIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartnershipIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
