import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BqmComponent } from './bqm.component';

describe('BqmComponent', () => {
  let component: BqmComponent;
  let fixture: ComponentFixture<BqmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BqmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BqmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
