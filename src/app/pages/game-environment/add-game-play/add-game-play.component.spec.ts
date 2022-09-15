import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGamePlayComponent } from './add-game-play.component';

describe('AddGamePlayComponent', () => {
  let component: AddGamePlayComponent;
  let fixture: ComponentFixture<AddGamePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGamePlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGamePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
