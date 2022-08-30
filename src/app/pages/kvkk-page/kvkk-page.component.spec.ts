import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvkkPageComponent } from './kvkk-page.component';

describe('KvkkPageComponent', () => {
  let component: KvkkPageComponent;
  let fixture: ComponentFixture<KvkkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvkkPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvkkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
