import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OvercomeStressAndAnxietyPage } from './overcome-stress-and-anxiety.page';

describe('OvercomeStressAndAnxietyPage', () => {
  let component: OvercomeStressAndAnxietyPage;
  let fixture: ComponentFixture<OvercomeStressAndAnxietyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvercomeStressAndAnxietyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvercomeStressAndAnxietyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
