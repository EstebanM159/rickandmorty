import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLocComponent } from './card-loc.component';

describe('CardLocComponent', () => {
  let component: CardLocComponent;
  let fixture: ComponentFixture<CardLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
