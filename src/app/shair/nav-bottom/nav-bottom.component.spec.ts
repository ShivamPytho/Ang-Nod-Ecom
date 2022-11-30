import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBottomComponent } from './nav-bottom.component';

describe('NavBottomComponent', () => {
  let component: NavBottomComponent;
  let fixture: ComponentFixture<NavBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
