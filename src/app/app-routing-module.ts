import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { ListProviders } from './list-providers/list-providers';
import { AddProvider } from './add-provider/add-provider';

const routes: Routes = [
  {
    path:"listProviders",
    component:ListProviders
  },
  {
    path:"addProvider",
    component:AddProvider
  },
  {
    path:"home",
    component:Home
  },
   {
    path:"contact",
    component:Contact
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
