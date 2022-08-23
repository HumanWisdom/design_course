import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeIndexPage } from './we-index.page';

describe('WeIndexPage', () => {
  let component: WeIndexPage;
  let fixture: ComponentFixture<WeIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
