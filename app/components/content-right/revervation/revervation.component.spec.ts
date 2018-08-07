import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevervationComponent } from './revervation.component';

describe('RevervationComponent', () => {
  let component: RevervationComponent;
  let fixture: ComponentFixture<RevervationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevervationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevervationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
