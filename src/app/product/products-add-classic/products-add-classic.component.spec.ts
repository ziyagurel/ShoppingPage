import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddClassicComponent } from './products-add-classic.component';

describe('ProductsAddClassicComponent', () => {
  let component: ProductsAddClassicComponent;
  let fixture: ComponentFixture<ProductsAddClassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsAddClassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAddClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
