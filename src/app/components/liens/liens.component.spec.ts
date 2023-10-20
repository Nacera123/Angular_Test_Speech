import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiensComponent } from './liens.component';

describe('LiensComponent', () => {
  let component: LiensComponent;
  let fixture: ComponentFixture<LiensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiensComponent]
    });
    fixture = TestBed.createComponent(LiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
