import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { ListProviders } from './list-providers/list-providers';
import { AddProvider } from './add-provider/add-provider';
import { UpdateProvider } from './update-provider/update-provider';
import { ListArticles } from './list-articles/list-articles';
import { AddArticle } from './add-article/add-article';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Signup } from './signup/signup';

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
    path:"updateProvider/:id",
    component:UpdateProvider
  },
  {
    path:"home",
    component:Home
  },
   {
    path:"contact",
    component:Contact
  },
  {
    path:"listArticles",
    component:ListArticles
  },
  {
    path:"addArticle",
    component:AddArticle
  },
  {
    path: 'signin',
    component: Login
  },
  {
    path: 'logout',
    component: Logout
  },
  {
    path: 'signup',
    component: Signup
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
