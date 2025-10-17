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

    this.providerService.getProviders().subscribe(
      {
         next: (data: any) => {
        this.providers.next(data);
        console.log(this.providers)
      },
      error: (err) => {
        console.error('Erreur récupération providers', err);

      }
      }
    );
    
  }


}
