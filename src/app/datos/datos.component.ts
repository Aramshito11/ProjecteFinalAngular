import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  correo=localStorage.getItem('correo')
  username:any;
  contrasena:any;
  productes: any[];

  constructor(private http: HttpClient) {
    const images = {
      imatge1: "http://localhost:4080/images/buscador/logo"
    };
    this.productes = [];
    this.productes.push(images);

    console.log(this.correo)
    // @ts-ignore
    let req = new HttpParams().set('email',this.correo);
    this.http.get("http://localhost:4080/api/nombre", {params: req}).subscribe((nom)=> {
      //@ts-ignore
      this.username = nom.Usuari;
      //@ts-ignore
      this.contrasena = nom.contrasenya
    })
  }
}
