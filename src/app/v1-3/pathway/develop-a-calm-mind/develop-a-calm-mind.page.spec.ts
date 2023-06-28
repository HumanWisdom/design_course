import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevelopACalmMindPage } from './develop-a-calm-mind.page';

describe('DevelopACalmMindPage', () => {
  let component: DevelopACalmMindPage;
  let fixture: ComponentFixture<DevelopACalmMindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopACalmMindPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevelopACalmMindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
