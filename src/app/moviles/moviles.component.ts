import {Component, OnInit} from '@angular/core';
import {ServeiService} from "../servei.service";
import {HttpClient} from "@angular/common/http";

function $(s: string) {

}

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit{
  productes: any[];
    constructor(private s: ServeiService, private http: HttpClient) {
      const producte1 = {
        titol: "iPhone 14 Pro Max",
        envio: "Envio Gratis",
        preu: "1499€",
        marca: "Apple",
        activat1: true,
        imatge: "http://localhost:4080/images/mobil/iphone14"
      };
      const producte2 = {
        titol: "iPhone 13",
        envio: "Recíbelo mañana",
        preu: "999€",
        marca: "Apple",
        activat1: true,
        imatge: "http://localhost:4080/images/mobil/iphone13"
      };
      const producte3 = {
        titol: "Realme GT Master Edition",
        envio: "Envio Gratis",
        preu: "330€",
        marca: "Realme",
        activat1: true,
        imatge: "http://localhost:4080/images/mobil/realmegt"
      };
      const producte4 = {
        titol: "Oppo Find X3 Pro",
        envio: "Envio Gratis",
        preu: "889€",
        marca: "Oppo",
        activat1: true,
        imatge: "http://localhost:4080/images/mobil/oppofind"
      };
      const producte5 = {
        titol: "Xiaomi 12T Pro",
        envio: "Recíbelo mañana",
        preu: "1450€",
        marca: "Xiaomi",
        activat1: true,
        imatge: "http://localhost:4080/images/mobil/xiaomi12t"
      };
      const producte6 = {
        titol: "Samsung S22 Ultra",
        envio: "Envio Gratis",
        preu: "1459€",
        marca: "Samsung",
        activat1: true,
        imatge: "http://localhost:4080/images/mobil/s22"
      };
      this.productes = [];
      this.productes.push(producte1);
      this.productes.push(producte2);
      this.productes.push(producte3);
      this.productes.push(producte4);
      this.productes.push(producte5);
      this.productes.push(producte6);

      this.http.post("http://localhost:4080/api/logs", {usuario: localStorage.getItem("nombre"), accion: "Entrar a la secció de mobils."}).subscribe()
   }

  ngOnInit(){

  }

  prova(){
    var element1 = <HTMLInputElement> document.getElementById("a1");
    var element2 = <HTMLInputElement> document.getElementById("a2");
    var element3 = <HTMLInputElement> document.getElementById("a3");
    var element4 = <HTMLInputElement> document.getElementById("a4");
    var element5 = <HTMLInputElement> document.getElementById("a5");
    var element6 = <HTMLInputElement> document.getElementById("a6");
    var element7 = <HTMLInputElement> document.getElementById("a7");
    var a1
    var a2
    var a3
    var a4
    var a5
    var a6
    var a7

    if (element1.checked){
      a1=true
    } else {
      a1=false
    }
    if (element2.checked){
      a2=true
    } else {
      a2=false
    }
    if (element3.checked){
      a3=true
    } else {
      a3=false
    }
    if (element4.checked){
      a4=true
    } else {
      a4=false
    }
    if (element5.checked){
      a5=true
    } else {
      a5=false
    }
    if (element6.checked){
      a6=true
    } else {
      a6=false
    }
    if (element7.checked){
      a7=true
    } else {
      a7=false
    }

    this.productes[0].activat1 = false;
    this.productes[2].activat1 = false;
    this.productes[3].activat1 = false;
    this.productes[5].activat1 = false;
    this.productes[1].activat1 = false;
    this.productes[4].activat1 = false;

    if (a3==true){
      this.productes[0].activat1 = true;
      this.productes[1].activat1 = true;
    }
    if (a4==true){
      this.productes[4].activat1 = true;
    }
    if (a5==true){
      this.productes[5].activat1 = true;
    }
    if (a6==true){
      this.productes[2].activat1 = true;
    }
    if (a7==true){
      this.productes[3].activat1 = true;
    }

    if (a1==true) {
      if (a3 == true || a4 == true || a5 == true || a6 == true || a7==true) {
        if (this.productes[0].activat1 == true) {
          this.productes[0].activat1 = true;
        } else {
          this.productes[0].activat1 = false;
        }
        if (this.productes[2].activat1 == true) {
          this.productes[2].activat1 = true;
        } else {
          this.productes[2].activat1 = false;
        }
        if (this.productes[3].activat1 == true) {
          this.productes[3].activat1 = true;
        } else {
          this.productes[3].activat1 = false;
        }
        if (this.productes[5].activat1 == true) {
          this.productes[5].activat1 = true;
        } else {
          this.productes[5].activat1 = false;
        }
        this.productes[1].activat1 = false;
        this.productes[4].activat1 = false;
      } else {
        this.productes[0].activat1 = true;
        this.productes[2].activat1 = true;
        this.productes[3].activat1 = true;
        this.productes[5].activat1 = true;
        this.productes[1].activat1 = false;
        this.productes[4].activat1 = false;
      }
    }
    if (a2==true){
        if(a3==true || a4==true || a5==true || a6==true || a7==true){

          if (this.productes[1].activat1 == true){
            this.productes[1].activat1 = true;
          } else {
            this.productes[1].activat1 = false;
          }
          if (this.productes[4].activat1 == true){
            this.productes[4].activat1 = true;
          } else {
            this.productes[4].activat1 = false;
          }
          this.productes[0].activat1 = false;
          this.productes[2].activat1 = false;
          this.productes[3].activat1 = false;
          this.productes[5].activat1 = false;
        } else {
          this.productes[0].activat1 = false;
          this.productes[1].activat1 = true;
          this.productes[2].activat1 = false;
          this.productes[3].activat1 = false;
          this.productes[4].activat1 = true;
          this.productes[5].activat1 = false;
        }
    }
    if (a1==false && a2==false && a3==false && a4==false && a5==false && a6==false && a7==false){
        this.productes[0].activat1 = true;
        this.productes[1].activat1 = true;
        this.productes[2].activat1 = true;
        this.productes[3].activat1 = true;
        this.productes[4].activat1 = true;
        this.productes[5].activat1 = true;
    }

  }


  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;
    var suma: any;
    if (elementId=="p1"){
      localStorage.setItem("producto1", document.getElementById('producto1')!.innerHTML)
      suma=document.getElementById('precio1')!.innerHTML
    } else if (elementId=="p2"){
      localStorage.setItem("producto2", document.getElementById('producto2')!.innerHTML)
      suma=document.getElementById('precio2')!.innerHTML
    } else if (elementId=="p3"){
      localStorage.setItem("producto3", document.getElementById('producto3')!.innerHTML)
      suma=document.getElementById('precio3')!.innerHTML
    } else if (elementId=="p4"){
      localStorage.setItem("producto4", document.getElementById('producto4')!.innerHTML)
      suma=document.getElementById('precio4')!.innerHTML
    } else if (elementId=="p5"){
      localStorage.setItem("producto5", document.getElementById('producto5')!.innerHTML)
      suma=document.getElementById('precio5')!.innerHTML
    } else if (elementId=="p6"){
      localStorage.setItem("producto6", document.getElementById('producto6')!.innerHTML)
      suma=document.getElementById('precio6')!.innerHTML
    }
    this.http.post("http://localhost:4080/api/logs", {usuario: localStorage.getItem("nombre"), accion: elementId+" afegit a la cistella."}).subscribe()

    function preu(){
      var res=localStorage.getItem('preu')!
      var x=parseInt(res)
      var z=parseInt(suma)
      var y= x+z
      if (isNaN(y)){
        y=z;
      } else {
        y= x+z
      }
      localStorage.setItem('preu',y.toString())
      console.log(localStorage.getItem('preu'))
    }
    preu()
  }


}
