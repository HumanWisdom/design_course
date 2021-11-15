import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TocAudioTitlePage } from './toc-audio-title.page';

describe('TocAudioTitlePage', () => {
  let component: TocAudioTitlePage;
  let fixture: ComponentFixture<TocAudioTitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocAudioTitlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TocAudioTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
