

import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';

@Injectable({
  providedIn: 'root',
})
export class IndexDbservice {

  public dbPromise!: Promise<IDBPDatabase<any>>;

  constructor () {
    this.dbPromise = openDB('operation', 1, {
      upgrade(db) {

        if(!db.objectStoreNames.contains('categorias')){
          db.createObjectStore('categorias', { keyPath: 'id', autoIncrement: true });
        }

        if(!db.objectStoreNames.contains('productos')){
          db.createObjectStore('productos', { keyPath: 'id', autoIncrement: true });
        }

      }
    });

    console.log('DB inicializada');
  }
}