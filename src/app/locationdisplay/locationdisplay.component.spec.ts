import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationdisplayComponent } from './locationdisplay.component';

describe('LocationdisplayComponent', () => {
  let component: LocationdisplayComponent;
  let fixture: ComponentFixture<LocationdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
