import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServeiService} from "../servei.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit{
  usuari: string = '';
  email: string = '';
  password: string = '';
  productes: any[];
  recaptcha: boolean = false;

  constructor(private router: Router, private http:HttpClient) {
    const images = {
      imatge1: "http://localhost:4080/images/buscador/logo"
    };
    this.productes = [];
    this.productes.push(images);
  }

  ngOnInit() {

  }
  resolved(captchaResponse: string) {
    this.recaptcha=true;
    console.log(`Resolved captche with response ${captchaResponse}:`)
  }
  formularioEnviado(): void{
    if (this.recaptcha==true){
      this.http.post<any>("http://localhost:4080/registre", {user: this.usuari,
        password: this.password,
        email: this.email,
        admin: false}).subscribe();
      console.log(this.usuari, this.password, this.email)
    }else
      alert("S'ha de fer el Recaptcha!")
  }
}
