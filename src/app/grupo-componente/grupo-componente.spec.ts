import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoComponente } from './grupo-componente';

describe('GrupoComponente', () => {
  let component: GrupoComponente;
  let fixture: ComponentFixture<GrupoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(GrupoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
