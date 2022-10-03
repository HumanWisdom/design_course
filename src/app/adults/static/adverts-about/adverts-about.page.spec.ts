import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvertsAboutPage } from './adverts-about.page';

describe('AdvertsAboutPage', () => {
  let component: AdvertsAboutPage;
  let fixture: ComponentFixture<AdvertsAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertsAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
