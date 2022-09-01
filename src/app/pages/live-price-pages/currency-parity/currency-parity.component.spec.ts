import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyParityComponent } from './currency-parity.component';

describe('CurrencyParityComponent', () => {
  let component: CurrencyParityComponent;
  let fixture: ComponentFixture<CurrencyParityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyParityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyParityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
