import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomPointsIndexPage } from './wisdom-points-index.page';

describe('WisdomPointsIndexPage', () => {
  let component: WisdomPointsIndexPage;
  let fixture: ComponentFixture<WisdomPointsIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomPointsIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomPointsIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
