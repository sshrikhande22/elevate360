import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsrComponent } from './tsr.component';

describe('TsrComponent', () => {
  let component: TsrComponent;
  let fixture: ComponentFixture<TsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
