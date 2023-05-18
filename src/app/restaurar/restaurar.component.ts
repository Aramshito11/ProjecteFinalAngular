import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.component.html',
  styleUrls: ['./restaurar.component.css']
})
export class RestaurarComponent {
  correu: any;
  nombre:any;
  productes: any[];

  constructor(private http: HttpClient) {
    const images = {
      imatge1: "http://localhost:4080/images/buscador/logo"
    };
    this.productes = [];
    this.productes.push(images);
  }

  enviar(){
    var resultat: Object =false;
    let req = new HttpParams().set('email',this.correu);
    this.http.get("http://localhost:4080/api/check", {params: req}).subscribe((client)=>{
      resultat=client;
      console.log(resultat);
      if(resultat==true){
        this.http.post("http://localhost:4080/api/sendemail", {name: this.nombre, email: this.correu}).subscribe((client ) =>{
          console.log(client);
        })
        alert("Se ha enviado un correo para modificar tu contraseña")
      }else{
        alert("Este correo no existe, introduce de nuevo tu correo")
      }
    })
  }
}
