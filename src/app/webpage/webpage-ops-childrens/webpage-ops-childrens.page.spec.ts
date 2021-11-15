import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebpageOpsChildrensPage } from './webpage-ops-childrens.page';

describe('WebpageOpsChildrensPage', () => {
  let component: WebpageOpsChildrensPage;
  let fixture: ComponentFixture<WebpageOpsChildrensPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageOpsChildrensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebpageOpsChildrensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
