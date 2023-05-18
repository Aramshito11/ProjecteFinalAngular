import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiService {
  valor:any;
  constructor() {
  }

  setNom(x: string, y:string){
    localStorage.setItem('usuario',x);
    localStorage.setItem('password', y)
  }
  getUser(){
    return localStorage.getItem('usuario')
  }
  getPassword(){
    return localStorage.getItem('password')
  }

  setMetamask(x: string){
    this.valor=x;
  }

  getMetamask(){
    return this.valor
  }
}
