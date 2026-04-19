import { Injectable } from '@angular/core';
import { Categoria } from "../modelos/categoria.model";
import { IndexDbservice } from './index-dbservice';
//import { IndexDbservice } from "./index-dbservice";

@Injectable({
  providedIn: 'root'
})
export class CategoriaDbservice {

  constructor(private db: IndexDbservice) {}

  async agregarCategoria(categoria: Categoria) {
    if(!categoria.tipo){
      console.error('Nombre es obligatorio.');
    }
    return (await this.db.dbPromise).add('categorias', categoria);
  }

  async todasCategorias(): Promise<Categoria[]> {
    return (await this.db.dbPromise).getAll('categorias');
  }

  async eliminarCategoria (id: number) {
    return (await this.db.dbPromise).delete('categorias', id);
  }

  async actualizarCategoria (categoria: Categoria) {
    if(!categoria.id){
      console.error('La categoria no existe.');
      return;
    }
    return (await this.db.dbPromise).put('categorias', categoria);
  }

  async obtenerCategoria (id: number): Promise<Categoria | undefined> {
    return (await this.db.dbPromise).get('categorias', id)
  }
}