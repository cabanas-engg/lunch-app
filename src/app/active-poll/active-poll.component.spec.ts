import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePollComponent } from './active-poll.component';

describe('ActivePollComponent', () => {
  let component: ActivePollComponent;
  let fixture: ComponentFixture<ActivePollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
