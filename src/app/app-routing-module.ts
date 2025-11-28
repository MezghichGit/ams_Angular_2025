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
import { AuthGuard } from './services/auth-guard';

const routes: Routes = [
  {
    path:"listProviders",
    component:ListProviders,
    canActivate:[AuthGuard]
  },
  {
    path:"addProvider",
    component:AddProvider,
    canActivate:[AuthGuard]
  },
  {
    path:"updateProvider/:id",
    component:UpdateProvider,
    canActivate:[AuthGuard]
  },
  {
    path:"home",
    component:Home,
    canActivate:[AuthGuard]
  },
   {
    path:"contact",
    component:Contact
  },
  {
    path:"listArticles",
    component:ListArticles,
    canActivate:[AuthGuard]
  },
  {
    path:"addArticle",
    component:AddArticle,
    canActivate:[AuthGuard]
  },
  {
    path: 'signin',
    component: Login
  },
  {
    path: 'logout',
    component: Logout,
    canActivate:[AuthGuard]
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
