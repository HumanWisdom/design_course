import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatedWisdomStoriesComponent } from './related-wisdom-stories.component';

describe('RelatedWisdomStoriesComponent', () => {
  let component: RelatedWisdomStoriesComponent;
  let fixture: ComponentFixture<RelatedWisdomStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedWisdomStoriesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedWisdomStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
