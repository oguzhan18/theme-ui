import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPricePagesComponent } from './all-price-pages.component';

describe('AllPricePagesComponent', () => {
  let component: AllPricePagesComponent;
  let fixture: ComponentFixture<AllPricePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPricePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPricePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
