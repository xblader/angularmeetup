import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazycomponent1Component } from './lazycomponent1.component';

describe('Lazycomponent1Component', () => {
  let component: Lazycomponent1Component;
  let fixture: ComponentFixture<Lazycomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazycomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazycomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
