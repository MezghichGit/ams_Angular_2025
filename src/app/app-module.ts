import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { BeginWithUpperPipe } from './pipes/begin-with-upper-pipe';
import { BeginWithDrPipe } from './pipes/begin-with-dr-pipe';
import { ListEtudiants } from './list-etudiants/list-etudiants';
import { ListeEmployers } from './liste-employers/liste-employers';
import { BeginWithUpper2Pipe } from './pipes/begin-with-upper2-pipe';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Users } from './users/users';
import { Navbar } from './navbar/navbar';
import { ListProviders } from './list-providers/list-providers';
import { AddProvider } from './add-provider/add-provider';
import { FormsModule } from '@angular/forms';
import { UpdateProvider } from './update-provider/update-provider';
import { ListArticles } from './list-articles/list-articles';
import { AddArticle } from './add-article/add-article';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Signup } from './signup/signup';

@NgModule({
  declarations: [
    App,
    Home,
    Contact,
    BeginWithUpperPipe,
    BeginWithDrPipe,
    ListEtudiants,
    ListeEmployers,
    BeginWithUpper2Pipe,
    Users,
    Navbar,
    ListProviders,
    AddProvider,
    UpdateProvider,
    ListArticles,
    AddArticle,
    Login,
    Logout,
    Signup
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
