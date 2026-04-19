import { Injectable } from '@angular/core';
import { IndexDbservice } from './index-dbservice';
import { Producto } from '../modelos/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoDbservice {
  constructor(private db: IndexDbservice){}

  async agregarProducto(producto: Producto){
    if(!producto.nombre || producto.precio <= 0){
      console.error('Nombre o precio invalido');
    }
    return (await this.db.dbPromise).add('productos', producto);
  }

  //Enlistar productos
  async todosProductos() : Promise <Producto[]> {
    return (await this.db.dbPromise).getAll('productos');
  }


  async elimiarProducto (id : number) {
    return (await this.db.dbPromise).delete('productos', id);
  }

  async actualizarProducto (producto: Producto){
    if(!producto.id) {
      console.error('El producto no existe');
      return;
    }
    return (await this.db.dbPromise).put('productos', producto);
  }


  async obtenerProducto (id: number): Promise<Producto | undefined> {
    return (await this.db.dbPromise).get('productos', id)
  }
}
