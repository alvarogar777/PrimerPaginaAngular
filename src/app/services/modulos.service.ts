import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {
 private modulos: Modulo[]= [
  {
    'id':1,
    'titulo':'Programacion orientada a objetos con c#',
    'logo' : './assets/img/logo-net.jpg',
    'temas':[
      {
        id:1,
        tema:'Entorno de desarrollo visual .NET'
      },
      {
        id:2,
        tema:'Diseño de clases'
      },
      {
        id:3,
        tema:'Implementacion de accesores y modificadores (GET/SET)'
      },
      {
        id:4,
        tema:'Clases abstractas y metodos Abstractos'
      },
      {
        id:5,
        tema:'Implementacion de namespace'
      },
      {
        id:6,
        tema:'Constructores, interfaces y metodos sobrecargados'
      },
      {
        id:7,
        tema:'Herencia'
      },
      {
        id:8,
        tema:'Polimorfismo'
      },
      {
        id:9,
        tema:'Encapsulamiento'
      },
      {
        id:10,
        tema:'Abstraccion'
      }
    ]
  },
  {
    'id':2,
    'titulo':'Introduccion al lenguaje de programacion con C#',
    'logo' : './assets/img/logo-Csharp.jpg',
    'temas':[
      {
        id:1,
        tema:'Definicion de variables y constantes'
      },
      {
        id:2,
        tema:'Estructura de control'
      },
      {
        id:3,
        tema:'Iteraciones (While, For, ForEach, do ... Lop)'
      },
      {
        id:4,
        tema:'Procedimientos y funciones'
      },
      {
        id:5,
        tema:'Enumeraciones'
      },
      {
        id:6,
        tema:'Control de Excepciones'
      },
      {
        id:7,
        tema:'Arreglos'
      },
      {
        id:8,
        tema:'Manejo de hilos'
      },
      {
        id:9,
        tema:'Manejo de colleciones'
      }
    ]
  }, 
  {
    'id':3,
    'titulo':'Sql Server',
    'logo' : './assets/img/logo-sqlserver.jpg',
    'temas':[
      {
        id:1,
        tema:'Instalacion y configuracion sql Server'
      },
      {
        id:2,
        tema:'Acceso y seguridad'
      },
      {
        id:3,
        tema:'Diseño de bases de datos y tablas'
      },
      {
        id:4,
        tema:'Manejo y definicion de lenjuage Transact SQL'
      },
      {
        id:5,
        tema:'Procedimientos Almacenados'
      },
      {
        id:6,
        tema:'Disparadores (Triggers)'
      },
      {
        id:7,
        tema:'Vistas'
      },
      {
        id:8,
        tema:'Funciones'
      },
      {
        id:9,
        tema:'Copias de seguridad'
      }
    ]
  } 
];
  constructor() { }
  getModulos(){
    return this.modulos;
  }

  getModulo(id : number){
    let resultado : Modulo;
    for (let i = 0; i < this.modulos.length; i++) {
      if (this.modulos[i].id == id) {
       // resultado.push(this.modulos[i]);
       resultado =this.modulos[i];
      }       
    }
    return resultado;
  }
}

export interface Modulo {
  id: number;
  titulo: string;
  logo: string;
  temas: any[];
}