import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductresComponent } from './productres.component';

describe('ProductresComponent', () => {
  let component: ProductresComponent;
  let fixture: ComponentFixture<ProductresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
