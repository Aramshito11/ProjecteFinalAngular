import { Component } from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  resultat: any;
  imatges: any[];

  constructor(private s: ServeiService) {
    const images = {
      foto1: "http://localhost:4080/images/buscador/logo"
    };
    this.imatges = [];
    this.imatges.push(images);
  }

  ngOnInit() {
    const nombre= localStorage.getItem('nombre')
    const c=undefined
    if (nombre==c){
      console.log("no esta")
    } else {
      let boton=document.getElementById("redondo")!;
      boton.style.visibility="hidden"
      let user=document.getElementById("redondo2")!;
      user.style.visibility="visible"
      let lin=document.getElementById("link")!;
      lin.style.marginTop="18%"
      this.resultat=nombre
      let mostrar=document.getElementById("logout")!;
      mostrar.style.visibility="visible"
      mostrar.style.cursor="pointer"
      let link2 = document.getElementById("carro")!;
      link2.style.visibility = "visible"
      link2.style.cursor = "pointer"
    }
  }
  borrar(){
    window.localStorage.clear()
    const nombre=this.s.getUser()
    this.resultat=nombre
    let mostrar=document.getElementById("logout")!;
    mostrar.style.visibility="hidden"
    let boton=document.getElementById("redondo")!;
    boton.style.backgroundImage="url(../../assets/login.png)"
    boton.style.borderRadius="50px"
    boton.style.width="50px"
    boton.style.marginLeft="50%"
    boton.style.marginTop="35%"
    boton.style.backgroundColor="white"
    boton.style.visibility="visible"
    let lin=document.getElementById("link")!;
    lin.style.marginTop="0"
    let user=document.getElementById("redondo2")!;
    user.style.visibility="hidden"
    user.style.marginLeft= "80%";
    let link=document.getElementById("link2")!;
    link.style.pointerEvents= "none";
    window.location.reload()
  }
}
