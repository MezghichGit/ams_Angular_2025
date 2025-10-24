import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from '../services/provider';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-update-provider',
  standalone: false,
  templateUrl: './update-provider.html',
  styleUrl: './update-provider.css'
})
export class UpdateProvider implements OnInit{

  idProvider:any;
  provider = new BehaviorSubject<any | null>(null);
  providerName:any;
  providerEmail:any;
  providerAddress:any;

  constructor(private activatedRoute:ActivatedRoute, private providerService:Provider,private router:Router){}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe()
      .subscribe(params => {
        // Step 1 : Récupération de l'id à travers ActivatedRoute
        this.idProvider = params.get('id'); // id : c'est le nom du paramètre dans la route
          //console.log('ID récupéré:', this.idProvider);

        // Step 2 : Chargement du provider via son id
        this.providerService.getProviderById(this.idProvider).subscribe({
          next: (data: any) => {
            this.provider.next(data);
            console.log(this.provider.value.name)
            this.providerName = this.provider.value.name;
            this.providerEmail = this.provider.value.email;
            this.providerAddress = this.provider.value.address;
            
          },
          error: (err) => {
            console.error('Erreur récupération provider', err);

          }
        });
        }
      );
  }

  updateProvider() {

  let providerUpdated={
    'id':this.idProvider,
    'name':this.providerName,
    'email':this.providerEmail,
    'address':this.providerAddress
  }
    this.providerService.updateProvider(providerUpdated).subscribe({
      next: (data: any) => {
        this.router.navigate(['listProviders']);

      },
      error: (err) => {
        console.error('Erreur mise à jour provider', err);

      }
    });
  }

}
