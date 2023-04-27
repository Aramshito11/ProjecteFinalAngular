import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-peupagina',
  templateUrl: './peupagina.component.html',
  styleUrls: ['./peupagina.component.css']
})
export class PeupaginaComponent implements OnInit{
  imatges: any[];
  hidden: boolean | undefined;

  constructor() {
    const images = {
      foto1: "http://localhost:4080/images/buscador/logo"
    };
    this.imatges = [];
    this.imatges.push(images);
    const ad = localStorage.getItem("admin")
    if (ad=="si"){
      this.hidden=true
    } else {
      this.hidden=false
    }
  }

  ngOnInit() {
  }

}
