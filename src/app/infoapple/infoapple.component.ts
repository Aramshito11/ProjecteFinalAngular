import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-infoapple',
  templateUrl: './infoapple.component.html',
  styleUrls: ['./infoapple.component.css']
})
export class InfoappleComponent implements OnInit{
  noticia:any;
  titulo:any;
  autor:any;
  constructor(private http: HttpClient) {
    fetch('https://api.newscatcherapi.com/v2/search?q=Apple&from=2023/05/15&countries=ES&page_size=1&topic=tech&lang=es', {
      headers: {
        // 'X-Api-Key': 'XDvS0ea22ngt_X6hmi7aIW0u2YeUbmzTQ2cDkPTvxNA'
        'X-Api-Key': 'hVpd-Y0ZaM8TDMXMbZEE3jD7qq2bYsk7W0YMFADavCw'

      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          const articles = data.articles;
          // @ts-ignore
          articles.forEach(article => {

            this.noticia =  article.summary;
            this.autor=article.author;
            this.titulo=article.title;

            console.log(this.noticia)
            console.log(this.titulo)
            console.log(this.autor)

            //
            // console.log('Summary:', summary);
          });
        } else {
          console.log('Failed to fetch news');
        }
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });

  }

  ngOnInit(): void {
  }


}
