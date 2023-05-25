import { Component, OnInit } from '@angular/core';
import {ServeiService} from "../servei.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  preu:any;
  bnb: any;
  bnbFinal: any;
  bnbFinalActual: any;
  username:any;
  u: any;
  dos: any;
  bnbAEurActual: any;
  bnbAEur: any;
  quatre: any;
  btcEUR:any;
  btcEURActual:any;
  ethEUR:any;
  ethEURActual:any;
  correo=localStorage.getItem('correo')
  llista: number[] = [];

  metodoPago: any;

   constructor(private http: HttpClient, private s: ServeiService) {
     let bnbActual=setInterval(async ()=>{
       this.getToken().then(
         (value)=>{
           console.log(value)
           this.bnbFinalActual=this.bnbFinal;
           this.bnbAEurActual=parseFloat((this.bnbAEur).toFixed(2));
         },
         (error)=>{
           console.log(error)
         }
       )
     },5000)

     let btcActual=setInterval(async ()=>{
       this.getBitcoinPrice().then(
         (value)=>{
           console.log(value)
           this.btcEURActual=this.btcEUR;
         },
         (error)=>{
           console.log(error)
         }
       )
     },5000)

     // let btcActual=setInterval(async ()=>{
     //   this.getBitcoinPrice()
     // },2000)

     let ethActual=setInterval(async ()=>{
       this.getEthereumPrice().then(
         (value)=>{
           console.log(value)
           this.ethEURActual=this.ethEUR;
         },
         (error)=>{
           console.log(error)
         }
       )
     },5000)
     // setInterval(async ()=>{
     //   this.getEthereumPrice()
     // },2000)




  }

  async ngOnInit() {
    await this.getToken().then((resultat) => {
      console.log(resultat)
    }).catch((e) => {
      console.log("Reject")
      console.log(e)
    })
    const subject = document.querySelector('#subject')!;
    if (localStorage.getItem("producto1")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto1")!);
      this.llista.push(1)
    }
    if (localStorage.getItem("producto2")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto2")!);
      this.llista.push(2)
    }
    if (localStorage.getItem("producto3")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto3")!);
      this.llista.push(3)
    }
    if (localStorage.getItem("producto4")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto4")!);
      this.llista.push(4)
    }
    if (localStorage.getItem("producto5")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto5")!);
      this.llista.push(5)
    }
    if (localStorage.getItem("producto6")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto6")!);
      this.llista.push(6)
    }

    if (localStorage.getItem("producto7")! == null) {
    } else {
      subject.insertAdjacentHTML('afterend', localStorage.getItem("producto7")!);
      this.llista.push(7)
    }
    if (localStorage.getItem("producto8")! == null) {
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
     let res= (this.bnbFinal*1000000000000000000)
     console.log(res)
     console.log(this.s.getMetamask())
     let params = [
       {
         from: this.s.getMetamask(),
         to: "0x1BdFA4b08c38310888F44896C1DfD1409145F310",
         value: Number(res).toString(16),
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

     const nuevoRegistro = {
       usuari: localStorage.getItem("nombre"),
       cripto: this.metodoPago
     };

     this.http.post('http://localhost:4080/insertmoneda', nuevoRegistro).subscribe(
       (response) => {
         console.log('Registro insertado correctamente:', response);
       },
       (error) => {
         console.error('Error al insertar el registro:', error);
       }
     );


    window.localStorage.clear()
    window.location.reload();
  }

  async getToken(): Promise<any> {
    try {
      const data1 = await this.http.get("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT").toPromise();
      // @ts-ignore
      this.u = data1.price;

      console.log("Preu BNB amb USD " + this.u);
      const data2 = await this.http.get("https://api.exchangerate-api.com/v4/latest/USD").toPromise();
      // @ts-ignore
      this.dos = data2.rates.EUR;
      console.log("USD * EUR " + this.dos);

      this.bnbAEur = this.u * this.dos;
      console.log("Preu BNB amb EUR: " + this.bnbAEur);
      if (localStorage.getItem('preu')==null){
        this.preu = 0+"€"
      } else {
        this.preu = localStorage.getItem('preu') + "€";
      }
      this.bnbAEur = this.u * this.dos;

      this.preu = localStorage.getItem('preu') + "€";
      this.quatre = localStorage.getItem('preu');
      this.bnbFinal = parseFloat((this.quatre / this.bnbAEur).toFixed(3));
      console.log("Preu euros: " + this.preu);
      console.log("Preu BNB: " + this.bnbFinal);

      this.bnbFinal = parseFloat((this.quatre / this.bnbAEur).toFixed(3));
    } catch (error) {
      console.error(error);
    }
  }

  async getBitcoinPrice(): Promise<any> {
    try {
      const data1 = await this.http.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur").toPromise();
      // @ts-ignore
      this.btcEUR=data1.bitcoin.eur;
      this.quatre = localStorage.getItem('preu');
      this.btcEUR = parseFloat((this.quatre / this.btcEUR).toFixed(8));

    } catch (error) {
      console.error(error);
    }
  }

  // getBitcoinPrice() {
  //   fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur')
  //     .then(response => response.json())
  //     .then(data => {
  //       const bitcoinPrice = data.bitcoin.eur;
  //       this.btcEUR=data.bitcoin.eur;
  //       console.log(`El precio actual de Bitcoin en euros es: ${bitcoinPrice}`);
  //       console.log(this.btcEUR)
  //     })
  //     .catch(error => {
  //       console.error('Ocurrió un error al obtener el precio de Bitcoin:', error);
  //     });
  // }

  async getEthereumPrice(): Promise<any> {
    try {
      const data1 = await this.http.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur").toPromise();
      // @ts-ignore
      this.ethEUR=data1.ethereum.eur;
      this.quatre = localStorage.getItem('preu');
      this.ethEUR = parseFloat((this.quatre / this.ethEUR).toFixed(8));

    } catch (error) {
      console.error(error);
    }
  }


  // getEthereumPrice() {
  //   fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur')
  //     .then(response => response.json())
  //     .then(data => {
  //       const ethereumPrice = data.ethereum.eur;
  //       this.ethEUR=parseFloat((data.ethereum.eur).toFixed(2));
  //       console.log(`El precio actual de Ethereum en euros es: ${ethereumPrice}`);
  //     })
  //     .catch(error => {
  //       console.error('Ocurrió un error al obtener el precio de Ethereum:', error);
  //     });
  // }




}
