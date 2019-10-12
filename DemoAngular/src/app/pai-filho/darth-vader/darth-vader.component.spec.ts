import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarthVaderComponent } from './darth-vader.component';

describe('DarthVaderComponent', () => {
  let component: DarthVaderComponent;
  let fixture: ComponentFixture<DarthVaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarthVaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarthVaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
