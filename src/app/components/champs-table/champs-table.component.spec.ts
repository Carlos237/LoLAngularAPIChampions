import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampsTableComponent } from './champs-table.component';

describe('ChampsTableComponent', () => {
  let component: ChampsTableComponent;
  let fixture: ComponentFixture<ChampsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
