import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreferralsComponent } from './addreferrals.component';

describe('AddreferralsComponent', () => {
  let component: AddreferralsComponent;
  let fixture: ComponentFixture<AddreferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreferralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
