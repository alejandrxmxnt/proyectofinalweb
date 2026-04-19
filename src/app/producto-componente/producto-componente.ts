import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../modelos/producto.model';
import { Categoria } from '../modelos/categoria.model';
import { ProductoDbservice } from '../servicios/producto-dbservice';
import { CategoriaDbservice } from '../servicios/categoria-dbservice';

@Component({
  selector: 'app-producto-componente',
  imports: [FormsModule, CommonModule],
  templateUrl: './producto-componente.html',
  styleUrl: './producto-componente.css',
})

export class ProductoComponente implements OnInit {
  
  productos : Producto[]=[];
  categorias: Categoria[]=[];

  nuevoProducto: Producto = {
    nombre: '',
    descripcion:'',
    precio: 0,
    cantidad: 0,
    categoriaId: 0
  };

  constructor (
    private productoDb : ProductoDbservice,
    private categoriaDb : CategoriaDbservice  
  ){}

  //async ngOnInit() {
  //  await this.cargarCategorias();
  //  await this.cargarProductos();
  //}

  async ngOnInit() {
    const lista = await this.categoriaDb.todasCategorias();
    
    if (lista.length === 0) {
      await this.categoriaDb.agregarCategoria({
        tipo: 'Oral',
        descripcion: 'Vía oral'
      });
    
      await this.categoriaDb.agregarCategoria({
        tipo: 'Rectal',
        descripcion: 'Vía rectal'
      });
    }
  
    await this.cargarCategorias();
  }

  async cargarCategorias(){
    this.categorias = await this.categoriaDb.todasCategorias();
  }

  async cargarProductos() {
    this.productos = await this.productoDb.todosProductos();
  }

  async guardar(){
    if(this.nuevoProducto.categoriaId === 0){
      alert('Seleccione una categoria por favor.');
      return;
    }
    await this.productoDb.agregarProducto(this.nuevoProducto);
    await this.cargarProductos();

    this.nuevoProducto = {
      nombre: '',
      descripcion: '',
      precio: 0,
      cantidad:0,
      categoriaId: 0
    };
  }

  async eliminar (id: number){
    await this.productoDb.elimiarProducto(id);
    await this.cargarProductos();
  }

  obtenerCategoria(id: number):string {
    const category = this.categorias.find(c=> c.id === id);
    return category ? category?.tipo: 'Sin categoria';
  }
}


