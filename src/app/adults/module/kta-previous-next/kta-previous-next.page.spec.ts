import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KtaPreviousNextPage } from './kta-previous-next.page';

describe('KtaPreviousNextPage', () => {
  let component: KtaPreviousNextPage;
  let fixture: ComponentFixture<KtaPreviousNextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtaPreviousNextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KtaPreviousNextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
