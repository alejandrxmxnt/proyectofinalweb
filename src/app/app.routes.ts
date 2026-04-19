import { Routes } from '@angular/router';
import { ProductoComponente } from './producto-componente/producto-componente';
import { GrupoComponente } from './grupo-componente/grupo-componente';
import { InicioComponente } from './inicio-componente/inicio-componente';

export const routes: Routes = [
    {path: 'principal', component: InicioComponente },
    {path: 'productos', component: ProductoComponente },
    {path: 'grupos', component: GrupoComponente }
];
