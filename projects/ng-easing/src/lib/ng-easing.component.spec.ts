import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEasingComponent } from './ng-easing.component';

describe('NgEasingComponent', () => {
  let component: NgEasingComponent;
  let fixture: ComponentFixture<NgEasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgEasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
