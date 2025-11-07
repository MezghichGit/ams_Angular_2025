import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class Provider {
  
  
    constructor(public http:HttpClient) //injection de dépendence
  {
    
  }
   getProviders(){
    return this.http.get(environment.baseUrl +"providers/");
  }

  saveProvider(provider:any){
    return this.http.post(environment.baseUrl +"providers/",provider);
  }

   deleteProvider(id:any){
     return this.http.delete(environment.baseUrl +"providers/"+id);
  }

   getProviderById(id:any){
     return this.http.get(environment.baseUrl +"providers/"+id);
  }

  updateProvider(provider:any){
     return this.http.post(environment.baseUrl +"providers/",provider);
  }

}
