import { Component, OnInit } from '@angular/core';
import {ServeiService} from "../servei.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  preu:any;
  bnb: any;
  bnbFinal: any;
  username:any;
  u: any;
  dos: any;
  tres: any;
  quatre: any;
  correo=localStorage.getItem('correo')
  llista: number[] = [];

  constructor(private http: HttpClient, private s: ServeiService) {
  }

  ngOnInit() {
    const subject = document.querySelector('#subject')!;
    if (localStorage.getItem("producto1")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto1")!);
      this.llista.push(1)
    }
    if ( localStorage.getItem("producto2")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto2")!);
      this.llista.push(2)
    }
    if ( localStorage.getItem("producto3")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto3")!);
      this.llista.push(3)
    }
    if ( localStorage.getItem("producto4")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto4")!);
      this.llista.push(4)
    }
    if (localStorage.getItem("producto5")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto5")!);
      this.llista.push(5)
    }
    if ( localStorage.getItem("producto6")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto6")!);
      this.llista.push(6)
    }

    if ( localStorage.getItem("producto7")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto7")!);
      this.llista.push(7)
    }
    if ( localStorage.getItem("producto8")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto8")!);
      this.llista.push(8)
    }
    if ( localStorage.getItem("producto9")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto9")!);
      this.llista.push(9)
    }
    if ( localStorage.getItem("producto10")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto10")!);
      this.llista.push(10)
    }
    if ( localStorage.getItem("producto11")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto11")!);
      this.llista.push(11)
    }

    if ( localStorage.getItem("producto12")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto12")!);
      this.llista.push(12)
    }
    if ( localStorage.getItem("producto13")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto13")!);
      this.llista.push(13)
    }
    if ( localStorage.getItem("producto14")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto14")!);
      this.llista.push(14)
    }
    if ( localStorage.getItem("producto15")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto15")!);
      this.llista.push(15)
    }
    if ( localStorage.getItem("producto16")! == null){
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto16")!);
      this.llista.push(16)
    }


    // fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
    //   .then(response => response.json())
    //   .then(data => {
    //     const bnbPriceUSD = parseFloat(data.price);
    //
    //     // Convertir el precio de USD a EUR utilizando la API de ExchangeRate-API
    //     fetch('https://api.exchangerate-api.com/v4/latest/USD')
    //       .then(response => response.json())
    //       .then(data => {
    //         const eurRate = data.rates.EUR;
    //         const bnbPriceEUR = bnbPriceUSD * eurRate;
    //         this.bnb=bnbPriceEUR;
    //
    //         // Aquí puedes trabajar con el precio de BNB en euros
    //         console.log(bnbPriceEUR);
    //       })
    //       .catch(error => {
    //         console.log('Error:', error);
    //       });
    //   })
    //   .catch(e => {
    //     console.log('Error:', e);
    //   });
    //
    // if (localStorage.getItem('preu')==null){
    //
    // } else {
    //   // this.preu=localStorage.getItem('preu')+"€"
    //   // this.bnbFinal=this.preu/this.bnb;
    // }



    } else {
      this.preu=localStorage.getItem('preu')+"€"
    }
  }
  async peticio(i: number): Promise<any>{
    const promise = new Promise(async (resolve, reject)=>{
      this.http.post("http://localhost:4080/api/historial", {
        usuari: localStorage.getItem("nombre"),
        idprod: this.llista[i]
      }).subscribe((res)=>{
        console.log(res)
      })
    })
    return promise
  }

   async borrar() {

     let params = [
       {
         from: this.s.getMetamask(),
         to: "0x1BdFA4b08c38310888F44896C1DfD1409145F310",
         value: Number(100000000000000000).toString(16),
         data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
       },
     ]
     // @ts-ignore
     await window.ethereum.request({method: "eth_sendTransaction", params})

      console.log(this.llista.length)
      for  (let i = 0; i < this.llista.length; i++) {
        this.peticio(i)
        for (let j = 0; j<100000000; j++){
        }
      }
     // No funciona el bucle per culpa del await

    // this.http.post("http://localhost:4080/api/historial", {
    //   usuari: localStorage.getItem("nombre"),
    //   idprod: this.llista
    // }).subscribe()

    window.localStorage.clear()
    window.location.reload();
  }

  async getToken(): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.http.get("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT").subscribe({
        next:(data)=>{
          // @ts-ignore
          resolve(data.price);
          // @ts-ignore
          this.u =data.price
          console.log("Preu BNB amb USD "+this.u)
          this.http.get("https://api.exchangerate-api.com/v4/latest/USD").subscribe({
            next:(data)=>{
              resolve(data);
              // @ts-ignore
              this.dos = data.rates.EUR
              console.log("USD * EUR "+this.dos)
                // @ts-ignore
              // const eurRate = data.rates.EUR;
              this.tres = this.u * this.dos;
              // this.bnb=bnbPriceEUR;

              // Aquí puedes trabajar con el precio de BNB en euros
              console.log(  "Preu BNB amb EUR: " +this.tres);

              // this.quatre=this.preu/this.tres
              console.log("PReu producte: "+this.quatre)

            },
            error: (e)=>{
              reject(e)
            }
          })
        },
        error: (e)=>{
          reject(e)
        }
      })
    });
    this.preu=localStorage.getItem('preu')+"€"
    this.quatre=localStorage.getItem('preu')
    this.bnbFinal=this.quatre/this.tres;
    console.log("Preu euros: "+this.preu)
    console.log("Preu BNB: "+this.bnbFinal)



      // if (localStorage.getItem('preu')==null){
      //
      // } else {
      //   this.preu=localStorage.getItem('preu')+"€"
      //   this.quatre=localStorage.getItem('preu')
      //   this.bnbFinal=this.quatre/this.tres;
      //
      //   // console.log("Preu euros: "+this.preu)
      //   // console.log("Preu BNB: "+this.bnbFinal)
      // }
    }






  async ex5(){
    await this.getToken().then((resultat)=>{
      console.log(resultat)
    }).catch((e)=>{
      console.log("Reject")
      console.log(e)
    })
  }
  ex3(){
    this.getToken();
  }


}
