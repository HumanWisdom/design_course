import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionEndS02V01Page } from './session-end-s02-v01.page';

describe('SessionEndS02V01Page', () => {
  let component: SessionEndS02V01Page;
  let fixture: ComponentFixture<SessionEndS02V01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionEndS02V01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionEndS02V01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
