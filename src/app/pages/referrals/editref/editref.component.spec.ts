import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrefComponent } from './editref.component';

describe('EditrefComponent', () => {
  let component: EditrefComponent;
  let fixture: ComponentFixture<EditrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
