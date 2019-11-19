import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocorComponent } from './democor.component';

describe('DemocorComponent', () => {
  let component: DemocorComponent;
  let fixture: ComponentFixture<DemocorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemocorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
