import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeTopicPage } from './change-topic.page';

describe('ChangeTopicPage', () => {
  let component: ChangeTopicPage;
  let fixture: ComponentFixture<ChangeTopicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTopicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeTopicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
