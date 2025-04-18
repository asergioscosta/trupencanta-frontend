import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspenderContratoComponent } from './suspender-contrato.component';

describe('SuspenderContratoComponent', () => {
  let component: SuspenderContratoComponent;
  let fixture: ComponentFixture<SuspenderContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuspenderContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspenderContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
