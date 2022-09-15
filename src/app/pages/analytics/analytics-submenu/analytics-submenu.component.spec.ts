import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsSubmenuComponent } from './analytics-submenu.component';

describe('AnalyticsSubmenuComponent', () => {
  let component: AnalyticsSubmenuComponent;
  let fixture: ComponentFixture<AnalyticsSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsSubmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
