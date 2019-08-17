import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModulosService, Modulo } from '../../services/modulos.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html'
})
export class ModuloComponent implements OnInit {

  modulos: Modulo[]=[];
  constructor(private _activatedRoute : ActivatedRoute, private _moduloService: ModulosService) {
    this._activatedRoute.params.subscribe( params => {
      console.log(params.id);
      //this.modulos=this._moduloService.getModulos();
      let resultado =this._moduloService.getModulo(params.id);
      this.modulos.push(resultado);
    });
   }

  ngOnInit() {
  }

}
