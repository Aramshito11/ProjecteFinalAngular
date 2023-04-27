import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producte} from "../producte.model";

@Component({
  selector: 'app-ordenadores',
  templateUrl: './ordenadores.component.html',
  styleUrls: ['./ordenadores.component.css']
})
export class OrdenadoresComponent implements OnInit {

  productes: any[];
  arrayProductes: Producte[] = [];

  constructor(private http: HttpClient) {
//info productes
    this.http.get<Producte[]>("http://localhost:4080/ordenadors").subscribe((data)=>{
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
    var element6 = <HTMLInputElement>document.getElementById("a6");
    var a1
    var a2
    var a3
    var a4
    var a5
    var a6

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
    if (element6.checked) {
      a6 = true
    } else {
      a6 = false
    }

    this.productes[0].activat1 = false;
    this.productes[2].activat1 = false;
    this.productes[3].activat1 = false;
    this.productes[1].activat1 = false;
    this.productes[4].activat1 = false;

    if (a3 == true) {
      this.productes[4].activat1 = true;
    }
    if (a4 == true) {
      this.productes[1].activat1 = true;
    }
    if (a5 == true) {
      this.productes[0].activat1 = true;
    }
    if (a6 == true) {
      this.productes[2].activat1 = true;
      this.productes[3].activat1 = true;
    }

    if (a1 == true) {
      if (a3 == true || a4 == true || a5 == true || a6 == true) {
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
      if (a3 == true || a4 == true || a5 == true || a6 == true) {

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
        this.productes[5].activat1 = false;
      }
    }
    if (a1 == false && a2 == false && a3 == false && a4 == false && a5 == false && a6 == false) {
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

    if (elementId=="p7"){
      localStorage.setItem("producto7", document.getElementById('producto7')!.innerHTML)
      suma=document.getElementById('precio7')!.innerHTML
    } else if (elementId=="p8"){
      localStorage.setItem("producto8", document.getElementById('producto8')!.innerHTML)
      suma=document.getElementById('precio8')!.innerHTML
    } else if (elementId=="p9"){
      localStorage.setItem("producto9", document.getElementById('producto9')!.innerHTML)
      suma=document.getElementById('precio9')!.innerHTML
    } else if (elementId=="p10"){
      localStorage.setItem("producto10", document.getElementById('producto10')!.innerHTML)
      suma=document.getElementById('precio10')!.innerHTML
    } else if (elementId=="p11"){
      localStorage.setItem("producto11", document.getElementById('producto11')!.innerHTML)
      suma=document.getElementById('precio11')!.innerHTML
    }
    console.log(localStorage.getItem("producto9"))
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
