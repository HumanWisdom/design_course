import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KtaPreviousDonePage } from './kta-previous-done.page';

describe('KtaPreviousDonePage', () => {
  let component: KtaPreviousDonePage;
  let fixture: ComponentFixture<KtaPreviousDonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtaPreviousDonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KtaPreviousDonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
