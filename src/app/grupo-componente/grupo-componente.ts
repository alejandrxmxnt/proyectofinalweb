import { Component, OnInit } from '@angular/core';
import { Categoria } from '../modelos/categoria.model';
import { CategoriaDbservice } from '../servicios/categoria-dbservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grupo-componente',
  imports: [FormsModule, CommonModule],
  templateUrl: './grupo-componente.html',
  styleUrl: './grupo-componente.css',
})
export class GrupoComponente implements OnInit{
  categorias:Categoria[] = [];
  nuevaCategoria: Categoria = {
    tipo: "",
    descripcion: ""
  }

  constructor (private categoriaDb: CategoriaDbservice){}

  async ngOnInit() {
    await this.cargarCategorias();
  }

  async cargarCategorias(){
    this.categorias = await this.categoriaDb.todasCategorias();
  }

  async guardar(){
    if(!this.nuevaCategoria.tipo){
      alert('El tipo de categoria es obligatorio.');
      return;
    }
    await this.categoriaDb.agregarCategoria(this.nuevaCategoria);
    await this.cargarCategorias();

    //limpieza de parametros
    this.nuevaCategoria = {
      tipo: "",
      descripcion: ""
    };
 
  }

  async eliminar (id: number) {
    await this.categoriaDb.eliminarCategoria(id);
    await this.cargarCategorias();
  }
}
