import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Provider } from '../services/provider';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css'
})
export class ListProviders implements OnInit{

  public providers = new BehaviorSubject<any | null>(null);
  

  constructor(private providerService: Provider )
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
