import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvertsHwpAppPage } from './adverts-hwp-app.page';

describe('AdvertsHwpAppPage', () => {
  let component: AdvertsHwpAppPage;
  let fixture: ComponentFixture<AdvertsHwpAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsHwpAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertsHwpAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
