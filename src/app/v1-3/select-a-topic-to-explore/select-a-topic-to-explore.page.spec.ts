import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectATopicToExplorePage } from './select-a-topic-to-explore.page';

describe('SelectATopicToExplorePage', () => {
  let component: SelectATopicToExplorePage;
  let fixture: ComponentFixture<SelectATopicToExplorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectATopicToExplorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectATopicToExplorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
