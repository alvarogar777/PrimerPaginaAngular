import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
anio: number;
compania : string;
  constructor() { 
    this.anio=new Date().getFullYear();
    this.compania = "Alvaro v1.0";
  }

  ngOnInit() {
  }

}
