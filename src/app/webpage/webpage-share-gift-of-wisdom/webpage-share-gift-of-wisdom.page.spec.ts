import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebpageShareGiftOfWisdomPage } from './webpage-share-gift-of-wisdom.page';

describe('WebpageShareGiftOfWisdomPage', () => {
  let component: WebpageShareGiftOfWisdomPage;
  let fixture: ComponentFixture<WebpageShareGiftOfWisdomPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageShareGiftOfWisdomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebpageShareGiftOfWisdomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
