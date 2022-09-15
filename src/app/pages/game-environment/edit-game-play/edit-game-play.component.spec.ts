import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGamePlayComponent } from './edit-game-play.component';

describe('EditGamePlayComponent', () => {
  let component: EditGamePlayComponent;
  let fixture: ComponentFixture<EditGamePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGamePlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGamePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
