import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = 'https://data.joornalo.com/news/';
  // https://data.joornalo.com/news/4/c/4c50e545-539e-4893-b505-1edc2de3c999.json

  constructor(private http: HttpClient) { }

  getNews(uuid: string, url: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    const path = `https://data.joornalo.com/news/${uuid.charAt(0)}/${uuid.charAt(1)}/${uuid}.json`;
    console.log(path);

    return this.http.get(path).pipe(
      map((response) => {
        console.log(response);
      }),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }

}
