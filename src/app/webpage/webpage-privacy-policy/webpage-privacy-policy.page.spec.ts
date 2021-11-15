import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebpagePrivacyPolicyPage } from './webpage-privacy-policy.page';

describe('WebpagePrivacyPolicyPage', () => {
  let component: WebpagePrivacyPolicyPage;
  let fixture: ComponentFixture<WebpagePrivacyPolicyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpagePrivacyPolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebpagePrivacyPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
