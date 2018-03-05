import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsVisaswebComponent } from './chats-visasweb.component';

describe('ChatsVisaswebComponent', () => {
  let component: ChatsVisaswebComponent;
  let fixture: ComponentFixture<ChatsVisaswebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsVisaswebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsVisaswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
