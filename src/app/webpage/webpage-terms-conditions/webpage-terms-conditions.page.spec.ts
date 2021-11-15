import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebpageTermsConditionsPage } from './webpage-terms-conditions.page';

describe('WebpageTermsConditionsPage', () => {
  let component: WebpageTermsConditionsPage;
  let fixture: ComponentFixture<WebpageTermsConditionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageTermsConditionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebpageTermsConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
