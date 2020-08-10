import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArenaViewComponent } from './single-arena-view.component';

describe('SingleArenaViewComponent', () => {
  let component: SingleArenaViewComponent;
  let fixture: ComponentFixture<SingleArenaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArenaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArenaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
