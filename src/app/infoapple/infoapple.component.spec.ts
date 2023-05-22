import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoappleComponent } from './infoapple.component';

describe('InfoappleComponent', () => {
  let component: InfoappleComponent;
  let fixture: ComponentFixture<InfoappleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoappleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoappleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
