import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producte} from "../producte.model";

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})
export class PerifericosComponent implements OnInit{
  productes: any[];
  arrayProductes: Producte[] = [];

  constructor(private http: HttpClient) {

    //info productes
    this.http.get<Producte[]>("http://localhost:4080/periferics").subscribe((data)=>{
      data.forEach((prod)=>{
        // @ts-ignore
        let doct=new Producte(prod.prod_codi, prod.prod_nom, prod.prod_infoenvio, prod.prod_preu, prod.prod_tipus);
        this.arrayProductes.push(doct);
        const producte = {
          titol: doct.prod_nom ,
          envio: doct.prod_infoenvio,
          preu: doct.prod_preu,
          tipus: doct.prod_tipus,
          activat1: true,
          activat2: true
        }
        this.productes.push(producte);
      })
    })
    this.productes = [];
  }

  ngOnInit() {
  }

  prova() {
    var element1 = <HTMLInputElement>document.getElementById("a1");
    var element2 = <HTMLInputElement>document.getElementById("a2");
    var element3 = <HTMLInputElement>document.getElementById("a3");
    var element4 = <HTMLInputElement>document.getElementById("a4");
    var element5 = <HTMLInputElement>document.getElementById("a5");
    var a1
    var a2
    var a3
    var a4
    var a5

    if (element1.checked) {
      a1 = true
    } else {
      a1 = false
    }
    if (element2.checked) {
      a2 = true
    } else {
      a2 = false
    }
    if (element3.checked) {
      a3 = true
    } else {
      a3 = false
    }
    if (element4.checked) {
      a4 = true
    } else {
      a4 = false
    }
    if (element5.checked) {
      a5 = true
    } else {
      a5 = false
    }

    this.productes[0].activat1 = false;
    this.productes[2].activat1 = false;
    this.productes[3].activat1 = false;
    this.productes[1].activat1 = false;
    this.productes[4].activat1 = false;

    if (a3 == true) {
      this.productes[0].activat1 = true;
    }
    if (a4 == true) {
      this.productes[2].activat1 = true;
      this.productes[1].activat1 = true;
    }
    if (a5 == true) {
      this.productes[3].activat1 = true;
      this.productes[4].activat1 = true;
    }

    if (a1 == true) {
      if (a3 == true || a4 == true || a5 == true) {
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
        this.productes[1].activat1 = false;
        this.productes[4].activat1 = false;
      } else {
        this.productes[0].activat1 = true;
        this.productes[2].activat1 = true;
        this.productes[3].activat1 = true;
        this.productes[1].activat1 = false;
        this.productes[4].activat1 = false;
      }
    }
    if (a2 == true) {
      if (a3 == true || a4 == true || a5 == true) {

        if (this.productes[1].activat1 == true) {
          this.productes[1].activat1 = true;
        } else {
          this.productes[1].activat1 = false;
        }
        if (this.productes[4].activat1 == true) {
          this.productes[4].activat1 = true;
        } else {
          this.productes[4].activat1 = false;
        }
        this.productes[0].activat1 = false;
        this.productes[2].activat1 = false;
        this.productes[3].activat1 = false;
      } else {
        this.productes[0].activat1 = false;
        this.productes[1].activat1 = true;
        this.productes[2].activat1 = false;
        this.productes[3].activat1 = false;
        this.productes[4].activat1 = true;
      }
    }
    if (a1 == false && a2 == false && a3 == false && a4 == false && a5 == false) {
      this.productes[0].activat1 = true;
      this.productes[1].activat1 = true;
      this.productes[2].activat1 = true;
      this.productes[3].activat1 = true;
      this.productes[4].activat1 = true;
    }
    if (a1 == true && a2 == true && a3 == true && a4 == true && a5 == true) {
      this.productes[0].activat1 = true;
      this.productes[1].activat1 = true;
      this.productes[2].activat1 = true;
      this.productes[3].activat1 = true;
      this.productes[4].activat1 = true;
    }
  }

  toggle(event: Event): void {
    let elementId: string = (event.target as Element).id;
    var suma: any;

    if (elementId=="p12"){
      localStorage.setItem("producto12", document.getElementById('producto12')!.innerHTML)
      suma=document.getElementById('precio12')!.innerHTML
    } else if (elementId=="p13"){
      localStorage.setItem("producto13", document.getElementById('producto13')!.innerHTML)
      suma=document.getElementById('precio13')!.innerHTML
    } else if (elementId=="p14"){
      localStorage.setItem("producto14", document.getElementById('producto14')!.innerHTML)
      suma=document.getElementById('precio14')!.innerHTML
    } else if (elementId=="p15"){
      localStorage.setItem("producto15", document.getElementById('producto15')!.innerHTML)
      suma=document.getElementById('precio15')!.innerHTML
    } else if (elementId=="p16"){
      localStorage.setItem("producto16", document.getElementById('producto16')!.innerHTML)
      suma=document.getElementById('precio16')!.innerHTML
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
