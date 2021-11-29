import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexWisdomStoriesPage } from './index-wisdom-stories.page';

describe('IndexWisdomStoriesPage', () => {
  let component: IndexWisdomStoriesPage;
  let fixture: ComponentFixture<IndexWisdomStoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexWisdomStoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexWisdomStoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
