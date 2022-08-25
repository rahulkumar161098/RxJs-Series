import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapConcatMapComponent } from './merge-map-concat-map.component';

describe('MergeMapConcatMapComponent', () => {
  let component: MergeMapConcatMapComponent;
  let fixture: ComponentFixture<MergeMapConcatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapConcatMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeMapConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
