import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponente } from './inicio-componente';

describe('InicioComponente', () => {
  let component: InicioComponente;
  let fixture: ComponentFixture<InicioComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
