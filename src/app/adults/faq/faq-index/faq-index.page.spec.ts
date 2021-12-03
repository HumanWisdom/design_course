import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaqIndexPage } from './faq-index.page';

describe('FaqIndexPage', () => {
  let component: FaqIndexPage;
  let fixture: ComponentFixture<FaqIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
