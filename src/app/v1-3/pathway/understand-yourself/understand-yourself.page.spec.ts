import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnderstandYourselfPage } from './understand-yourself.page';

describe('UnderstandYourselfPage', () => {
  let component: UnderstandYourselfPage;
  let fixture: ComponentFixture<UnderstandYourselfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandYourselfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnderstandYourselfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
