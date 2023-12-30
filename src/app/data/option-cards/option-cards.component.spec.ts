import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCardsComponent } from './option-cards.component';

describe('OptionCardsComponent', () => {
  let component: OptionCardsComponent;
  let fixture: ComponentFixture<OptionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
