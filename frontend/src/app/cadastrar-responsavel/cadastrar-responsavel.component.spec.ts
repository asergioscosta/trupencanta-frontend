import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarResponsavelComponent } from './cadastrar-responsavel.component';

describe('CadastrarResponsavelComponent', () => {
  let component: CadastrarResponsavelComponent;
  let fixture: ComponentFixture<CadastrarResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarResponsavelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
