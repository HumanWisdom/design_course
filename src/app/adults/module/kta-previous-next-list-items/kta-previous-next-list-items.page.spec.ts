import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KtaPreviousNextListItemsPage } from './kta-previous-next-list-items.page';

describe('KtaPreviousNextListItemsPage', () => {
  let component: KtaPreviousNextListItemsPage;
  let fixture: ComponentFixture<KtaPreviousNextListItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtaPreviousNextListItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KtaPreviousNextListItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
