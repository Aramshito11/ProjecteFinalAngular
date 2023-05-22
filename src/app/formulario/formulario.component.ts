import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServeiService} from "../servei.service";
import {HttpClient, HttpParams} from "@angular/common/http";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  correu: any;
  nombre:any;
  productes: any[];
  recaptcha: boolean = false;

  constructor(private router: Router, private http: HttpClient, private s: ServeiService) {
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
  async formularioEnviado($myParam: string=''){
    let account: any;
    let balance;

    var resultat: Object =false;
    var ad: Object =false;
    var username:any;


    let req = new HttpParams().set('email',this.correu);
    let req2 = new HttpParams().set('name',this.nombre);
    if (this.recaptcha==true){
      this.http.get("http://localhost:4080/inicisessio", {params: req}).subscribe((client)=>{
        resultat=client;
        console.log(resultat);
        if(resultat==true){
          this.http.get("http://localhost:4080/contrasenya", {params: req2}).subscribe(async(client)=> {
            resultat = client;
            console.log(resultat);
            if (resultat == true) {
              this.http.get("http://localhost:4080/api/admin", {params: req}).subscribe(async(a)=>{
                //@ts-ignore
                if (a.admin == true) {
                  localStorage.setItem("admin", "si")
                } else {
                  localStorage.setItem("admin", "no")
                }
              })

              // Conectar a la wallet de metamask

              // @ts-ignore
              await window.ethereum.request({method: 'eth_requestAccounts'}).then((accounts: any[]) => {
                account = accounts[0];
                console.log(account);
                this.s.setMetamask(account)
              });

              // @ts-ignore
              await window.ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then((result: any) => {
                let wei = parseInt(result,16);
                balance = wei / (10**18);
                console.log(balance + " ETH");
              });


              this.http.get("http://localhost:4080/api/nombre", {params: req}).subscribe((nom) => {
                //@ts-ignore
                username = nom.Usuari;
                localStorage.setItem("nombre", username)
                localStorage.setItem("correo", this.correu)

                alert("Inicio de sesion correcto")
                const nav: string[] = ['/pagina-web']
                if ($myParam.length) {
                  nav.push($myParam);
                }
                this.router.navigate(nav)
              })
            } else
              alert("Contrasenya incorrecte.")
          })

        }else{
          alert("Este correo no existe, introduce de nuevo tu correo")
        }
      })
    } else{
      alert("S'ha de fer el Recaptcha!")
    }

  }

}
