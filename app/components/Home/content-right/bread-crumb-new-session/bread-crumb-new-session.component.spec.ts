import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbNewSessionComponent } from './bread-crumb-new-session.component';

describe('BreadCrumbNewSessionComponent', () => {
  let component: BreadCrumbNewSessionComponent;
  let fixture: ComponentFixture<BreadCrumbNewSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCrumbNewSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbNewSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
