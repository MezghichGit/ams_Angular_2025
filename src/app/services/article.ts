import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Article {
   constructor(public http:HttpClient) //injection de dépendence
  {
    
  }
   getArticles(){
    return this.http.get("http://127.0.0.1:8081/articles/");
  }
}
