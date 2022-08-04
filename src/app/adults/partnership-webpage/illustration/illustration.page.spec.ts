import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IllustrationPage } from './illustration.page';

describe('IllustrationPage', () => {
  let component: IllustrationPage;
  let fixture: ComponentFixture<IllustrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IllustrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
