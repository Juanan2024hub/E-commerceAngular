import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProduct } from './basic-product';

describe('BasicProduct', () => {
  let component: BasicProduct;
  let fixture: ComponentFixture<BasicProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
