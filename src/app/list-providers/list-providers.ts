import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Provider } from '../services/provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css'
})
export class ListProviders implements OnInit{

  public providers = new BehaviorSubject<any | null>(null);
  

  constructor(private providerService: Provider, private router:Router )
  {}

  ngOnInit(): void {

    this.loadProviders();
    
  }

  deleteProvider(id:any){
    this.providerService.deleteProvider(id).subscribe({
      next: (data: any) => {
      this.loadProviders();
      },
      error: (err) => {
        console.error('Problème de suppression du provider', err);

      }
    });
  }

  updateProvider(id:any){
    this.router.navigate(['updateProvider', id]);
  }
  navigateAddProvider(){
    this.router.navigate(['addProvider']);
  }
  loadProviders(){
    this.providerService.getProviders().subscribe({
      next: (data: any) => {
        this.providers.next(data);

      },
      error: (err) => {
        console.error('Erreur récupération providers', err);

      }
    });
  }


}
