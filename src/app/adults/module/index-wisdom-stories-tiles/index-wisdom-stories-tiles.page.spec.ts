import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexWisdomStoriesTilesPage } from './index-wisdom-stories-tiles.page';

describe('IndexWisdomStoriesTilesPage', () => {
  let component: IndexWisdomStoriesTilesPage;
  let fixture: ComponentFixture<IndexWisdomStoriesTilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexWisdomStoriesTilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexWisdomStoriesTilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
