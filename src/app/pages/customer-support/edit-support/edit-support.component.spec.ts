import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupportComponent } from './edit-support.component';

describe('EditSupportComponent', () => {
  let component: EditSupportComponent;
  let fixture: ComponentFixture<EditSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
