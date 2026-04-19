import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComponente } from './usuario-componente';

describe('UsuarioComponente', () => {
  let component: UsuarioComponente;
  let fixture: ComponentFixture<UsuarioComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
