import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsMainComponent } from './chats-main.component';

describe('ChatsMainComponent', () => {
  let component: ChatsMainComponent;
  let fixture: ComponentFixture<ChatsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
