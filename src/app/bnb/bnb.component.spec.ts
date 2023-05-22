import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BNBComponent } from './bnb.component';

describe('BNBComponent', () => {
  let component: BNBComponent;
  let fixture: ComponentFixture<BNBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BNBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BNBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
