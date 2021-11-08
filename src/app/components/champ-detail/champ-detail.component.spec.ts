import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampDetailComponent } from './champ-detail.component';

describe('ChampDetailComponent', () => {
  let component: ChampDetailComponent;
  let fixture: ComponentFixture<ChampDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
