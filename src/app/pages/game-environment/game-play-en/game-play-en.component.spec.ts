import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayEnComponent } from './game-play-en.component';

describe('GamePlayEnComponent', () => {
  let component: GamePlayEnComponent;
  let fixture: ComponentFixture<GamePlayEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlayEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
