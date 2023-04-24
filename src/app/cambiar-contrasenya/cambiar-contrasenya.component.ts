import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-cambiar-contrasenya',
  templateUrl: './cambiar-contrasenya.component.html',
  styleUrls: ['./cambiar-contrasenya.component.css']
})
export class CambiarContrasenyaComponent {
  correu:any;
  password:any;
  password2:any;
  productes: any[];
  constructor(private router: Router,private http: HttpClient) {
    const images = {
      imatge1: "http://localhost:4080/images/buscador/logo"
    };
    this.productes = [];
    this.productes.push(images);
  }

  enviar($myParam: string = ''){
    var resultat: Object =false;
    let req = new HttpParams().set('email',this.correu);
    this.http.get("http://172.16.9.1:4080/api/check", {params: req}).subscribe((client)=>{

      resultat=client;
      if(resultat==true){
        this.http.post("http://172.16.9.1:4080/api/contrasenya", {email: this.correu, contra: this.password}).subscribe((resultat)=>{
          console.log("Nova contrasenya: "+resultat)
          alert("Contraseña cambiada correctamente!")
          const nav: string[] = ['/formulario']
          if($myParam.length) {
            nav.push($myParam);
          }
          this.router.navigate(nav);
        })
      }else{
        alert("Este correo no existe, introduce de nuevo tu correo")
      }
    })
  }
}
