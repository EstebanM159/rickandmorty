import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioDetailsComponent } from './episodio-details.component';

describe('EpisodioDetailsComponent', () => {
  let component: EpisodioDetailsComponent;
  let fixture: ComponentFixture<EpisodioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodioDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
