import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddToHomescreenIosPage } from './add-to-homescreen-ios.page';

describe('AddToHomescreenIosPage', () => {
  let component: AddToHomescreenIosPage;
  let fixture: ComponentFixture<AddToHomescreenIosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToHomescreenIosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddToHomescreenIosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
