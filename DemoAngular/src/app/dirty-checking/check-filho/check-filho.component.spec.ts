import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFilhoComponent } from './check-filho.component';

describe('CheckFilhoComponent', () => {
  let component: CheckFilhoComponent;
  let fixture: ComponentFixture<CheckFilhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFilhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
