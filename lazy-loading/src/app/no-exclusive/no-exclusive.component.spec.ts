import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoExclusiveComponent } from './no-exclusive.component';

describe('NoExclusiveComponent', () => {
  let component: NoExclusiveComponent;
  let fixture: ComponentFixture<NoExclusiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoExclusiveComponent]
    });
    fixture = TestBed.createComponent(NoExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
