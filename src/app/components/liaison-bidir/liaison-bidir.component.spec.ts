import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonBidirComponent } from './liaison-bidir.component';

describe('LiaisonBidirComponent', () => {
  let component: LiaisonBidirComponent;
  let fixture: ComponentFixture<LiaisonBidirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiaisonBidirComponent]
    });
    fixture = TestBed.createComponent(LiaisonBidirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
