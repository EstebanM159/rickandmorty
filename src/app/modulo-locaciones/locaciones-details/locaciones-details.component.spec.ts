import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacionesDetailsComponent } from './locaciones-details.component';

describe('LocacionesDetailsComponent', () => {
  let component: LocacionesDetailsComponent;
  let fixture: ComponentFixture<LocacionesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocacionesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocacionesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
