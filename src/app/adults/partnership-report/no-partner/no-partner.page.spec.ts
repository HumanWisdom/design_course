import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoPartnerPage } from './no-partner.page';

describe('NoPartnerPage', () => {
  let component: NoPartnerPage;
  let fixture: ComponentFixture<NoPartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoPartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
