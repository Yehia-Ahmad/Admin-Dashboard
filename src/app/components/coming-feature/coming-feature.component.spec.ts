import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingFeatureComponent } from './coming-feature.component';

describe('ComingFeatureComponent', () => {
  let component: ComingFeatureComponent;
  let fixture: ComponentFixture<ComingFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComingFeatureComponent]
    });
    fixture = TestBed.createComponent(ComingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
