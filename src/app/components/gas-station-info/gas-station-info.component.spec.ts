import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationInfoComponent } from './gas-station-info.component';

describe('GasStationInfoComponent', () => {
  let component: GasStationInfoComponent;
  let fixture: ComponentFixture<GasStationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasStationInfoComponent]
    });
    fixture = TestBed.createComponent(GasStationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
