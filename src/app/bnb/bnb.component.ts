import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bnb',
  templateUrl: './bnb.component.html',
  styleUrls: ['./bnb.component.css']
})
export class BNBComponent {
  constructor(private http: HttpClient) {
  }

  async promesaInfo(){
    const primise = new Promise<any>((resolve,reject) => {
      this.http.get('https://api-testnet.bscscan.com/api?module=account&action=balance&address=0xa39675357C023bfaf3A4A097482f00c6a275de91&tag=latest&apikey=80544533-2e7e-40d2-b0ab-d3fb0a761c5b').subscribe({
        next: value => {resolve(value)},
        error: err => {reject(err)}
      })
    })
    return primise
  }

  async info(){
    await this.promesaInfo().then(
      (value) =>{console.log(value)},
      (err) =>{console.log(err)}
    )
  }
}
