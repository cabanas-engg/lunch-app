import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersWidgetComponent } from './winners-widget.component';

describe('WinnersWidgetComponent', () => {
  let component: WinnersWidgetComponent;
  let fixture: ComponentFixture<WinnersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnersWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
