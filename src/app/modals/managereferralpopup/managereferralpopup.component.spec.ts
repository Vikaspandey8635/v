import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagereferralpopupComponent } from './managereferralpopup.component';

describe('ManagereferralpopupComponent', () => {
  let component: ManagereferralpopupComponent;
  let fixture: ComponentFixture<ManagereferralpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagereferralpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagereferralpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
