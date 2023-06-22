import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiExclusiveComponent } from './semi-exclusive.component';

describe('SemiExclusiveComponent', () => {
  let component: SemiExclusiveComponent;
  let fixture: ComponentFixture<SemiExclusiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemiExclusiveComponent]
    });
    fixture = TestBed.createComponent(SemiExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
