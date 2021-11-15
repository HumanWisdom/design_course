import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebpageLandingV01Page } from './webpage-landing-v01.page';

describe('WebpageLandingV01Page', () => {
  let component: WebpageLandingV01Page;
  let fixture: ComponentFixture<WebpageLandingV01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageLandingV01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebpageLandingV01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
