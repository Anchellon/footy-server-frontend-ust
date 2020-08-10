import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsignupComponent } from './hostsignup.component';

describe('HostsignupComponent', () => {
  let component: HostsignupComponent;
  let fixture: ComponentFixture<HostsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
