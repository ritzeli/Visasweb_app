import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsTranslationComponent } from './chats-translation.component';

describe('ChatsTranslationComponent', () => {
  let component: ChatsTranslationComponent;
  let fixture: ComponentFixture<ChatsTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
