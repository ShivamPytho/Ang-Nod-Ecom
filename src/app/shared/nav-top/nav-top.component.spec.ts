import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopComponent } from './nav-top.component';

describe('NavTopComponent', () => {
  let component: NavTopComponent;
  let fixture: ComponentFixture<NavTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
