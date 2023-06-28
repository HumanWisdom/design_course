import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepeatUserPage } from './repeat-user.page';

describe('RepeatUserPage', () => {
  let component: RepeatUserPage;
  let fixture: ComponentFixture<RepeatUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepeatUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
