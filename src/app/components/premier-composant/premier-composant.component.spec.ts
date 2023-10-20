import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierComposantComponent } from './premier-composant.component';

describe('PremierComposantComponent', () => {
  let component: PremierComposantComponent;
  let fixture: ComponentFixture<PremierComposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremierComposantComponent]
    });
    fixture = TestBed.createComponent(PremierComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
