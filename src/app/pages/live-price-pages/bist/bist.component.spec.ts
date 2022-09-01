import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BistComponent } from './bist.component';

describe('BistComponent', () => {
  let component: BistComponent;
  let fixture: ComponentFixture<BistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
