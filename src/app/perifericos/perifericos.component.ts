import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})
export class PerifericosComponent implements OnInit{
  productes: any[];
  constructor(private http: HttpClient) {
    //info productes
    // this.http.get<Doctor[]>("http://localhost:4080/llistaDoctors").subscribe((data)=>{
    //   data.forEach((doctor)=>{
    //     // @ts-ignore
    //     let doct=new Doctor(doctor.doctor_codi, doctor.doctor_hosptial_codi, doctor.doctor_nom, doctor.doctor_especialitat);
    //     console.log(doct)
    //   })
    // })



    const producte1 = {
      titol: "NewSkill Icarus",
      envio: "Envio Gratis",
      preu: "499€",
      tipus: "Monitor",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/periferics/newskill"
    };
    const producte2 = {
      titol: "Logitech K120",
      envio: "Recíbelo mañana",
      preu: "11€",
      tipus: "Teclat",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/periferics/logitech"
    };
    const producte3 = {
      titol: "Forgeon Clutch",
      envio: "Envio Gratis",
      preu: "499€",
      tipus: "Teclat",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/periferics/forgeon"
    };
    const producte4 = {
      titol: "Razer Basilisk",
      envio: "Envio Gratis",
      preu: "40€",
      tipus: "Ratoli",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/periferics/razer"
    };
    const producte5 = {
      titol: "Asus P307",
      envio: "Recíbelo mañana",
      preu: "45€",
      tipus: "Ratoli",
      activat1: true,
      activat2: true,
      imatge: "http://localhost:4080/images/periferics/asus"
    };

    this.productes = [];
    this.productes.push(producte1);
    this.productes.push(producte2);
    this.productes.push(producte3);
    this.productes.push(producte4);
    this.productes.push(producte5);
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
