import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LukeSkywalkerComponent } from './luke-skywalker.component';

describe('LukeSkywalkerComponent', () => {
  let component: LukeSkywalkerComponent;
  let fixture: ComponentFixture<LukeSkywalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LukeSkywalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LukeSkywalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
