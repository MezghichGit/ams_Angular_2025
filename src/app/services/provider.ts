import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Provider {
  
  
    constructor(public http:HttpClient) //injection de dépendence
  {
    
  }
   getProviders(){
    return this.http.get("http://127.0.0.1:8081/providers/");
  }

  saveProvider(provider:any){
    return this.http.post("http://127.0.0.1:8081/providers/",provider);
  }

}
