import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Article {
   constructor(public http:HttpClient) //injection de dépendence
  {
    
  }
   getArticles(){
    return this.http.get(environment.baseUrl +"articles/");
  }
}
