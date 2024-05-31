import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngfeaturesComponent } from './angfeatures.component';

describe('AngfeaturesComponent', () => {
  let component: AngfeaturesComponent;
  let fixture: ComponentFixture<AngfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngfeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
