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


  modoEdicion = false;
  idEditando: number | null = null;

  constructor (
    private productoDb : ProductoDbservice,
    private categoriaDb : CategoriaDbservice  
  ){}

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

    await this.cargarProductos();
  }

  async cargarCategorias(){
    this.categorias = await this.categoriaDb.todasCategorias();
  }

  async cargarProductos() {
    this.productos = await this.productoDb.todosProductos();
  }

  /*
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
  }*/
/*
  async guardar(){

  const categoria = Number(this.nuevoProducto.categoriaId);

  if(categoria === 0){
    //alert('Seleccione una categoria por favor.');
    return;
  }

  await this.productoDb.agregarProducto({
    ...this.nuevoProducto,
    categoriaId: categoria
  });

  await this.cargarProductos();

  // RESET CORRECTO (sin romper ngModel)
  this.nuevoProducto.nombre = '';
  this.nuevoProducto.descripcion = '';
  this.nuevoProducto.precio = 0;
  this.nuevoProducto.cantidad = 0;
  this.nuevoProducto.categoriaId = 0;
}*/

async guardar() {

    const categoria = Number(this.nuevoProducto.categoriaId);

    if (categoria === 0) {
      return;
    }

    if (this.modoEdicion && this.idEditando !== null) {

      await this.productoDb.actualizarProducto({
        id: this.idEditando,
        ...this.nuevoProducto,
        categoriaId: categoria
      });

      this.modoEdicion = false;
      this.idEditando = null;

    } else {
      // CREAR
      await this.productoDb.agregarProducto({
        ...this.nuevoProducto,
        categoriaId: categoria
      });
    }

    await this.cargarProductos();

    // RESET FORMULARIO SIN ROMPER ngModel
    this.nuevoProducto.nombre = '';
    this.nuevoProducto.descripcion = '';
    this.nuevoProducto.precio = 0;
    this.nuevoProducto.cantidad = 0;
    this.nuevoProducto.categoriaId = 0;
  }

  async eliminar (id: number){
    await this.productoDb.elimiarProducto(id);
    await this.cargarProductos();
  }

  obtenerCategoria(id: number):string {
    const category = this.categorias.find(c=> c.id === id);
    return category ? category?.tipo: 'Sin categoria';
  }
/*
  editar(producto: Producto){
    this.nuevoProducto = { ...producto };
  }*/

  editar(producto: Producto){

    this.nuevoProducto = { ...producto };

    this.modoEdicion = true;
    this.idEditando = producto.id!;
  }
}


