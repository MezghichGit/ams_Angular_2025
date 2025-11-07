import { Component, OnInit } from '@angular/core';
import { Article } from '../services/article';
import { Provider } from '../services/provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  standalone: false,
  templateUrl: './add-article.html',
  styleUrl: './add-article.css'
})
export class AddArticle implements OnInit{
providers: any;
constructor(private articleService: Article, private providerService: Provider, private router:Router) { }
  
ngOnInit(): void {
    this.loadProviders();
  }

  createArticle(articleForm: any) {
    //console.log(article)
    let article  ={
      libelle: articleForm.label,
      price: articleForm.price,
      //picture: articleForm.picture
    }
    
    this.articleService.addArticle(article,articleForm.idProvider).subscribe(
      response => {
        //console.log(response);
        this.router.navigate(['listArticles']);
      }
    );
  }

loadProviders(): void {
    this.providerService.getProviders().subscribe({
      next: (data) => this.providers = data,
      error: (err) => console.error('Erreur lors du chargement des fournisseurs:', err)
    });
  }
}
