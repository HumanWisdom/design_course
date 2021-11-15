import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebpageOpsTeenagersPage } from './webpage-ops-teenagers.page';

describe('WebpageOpsTeenagersPage', () => {
  let component: WebpageOpsTeenagersPage;
  let fixture: ComponentFixture<WebpageOpsTeenagersPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageOpsTeenagersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebpageOpsTeenagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
