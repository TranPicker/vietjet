import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionImportComponent } from './session-import.component';

describe('SessionImportComponent', () => {
  let component: SessionImportComponent;
  let fixture: ComponentFixture<SessionImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
