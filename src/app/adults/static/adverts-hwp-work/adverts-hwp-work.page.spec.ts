import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvertsHwpWorkPage } from './adverts-hwp-work.page';

describe('AdvertsHwpWorkPage', () => {
  let component: AdvertsHwpWorkPage;
  let fixture: ComponentFixture<AdvertsHwpWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsHwpWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertsHwpWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
