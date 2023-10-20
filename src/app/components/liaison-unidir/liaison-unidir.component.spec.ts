import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonUnidirComponent } from './liaison-unidir.component';

describe('LiaisonUnidirComponent', () => {
  let component: LiaisonUnidirComponent;
  let fixture: ComponentFixture<LiaisonUnidirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiaisonUnidirComponent]
    });
    fixture = TestBed.createComponent(LiaisonUnidirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
