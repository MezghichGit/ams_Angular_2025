import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../services/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-articles',
  standalone: false,
  templateUrl: './list-articles.html',
  styleUrl: './list-articles.css'
})
export class ListArticles implements OnInit {
public articles = new BehaviorSubject<any | null>(null);
  

  constructor(private articleService: Article, private router:Router )
  {}

  ngOnInit(): void {

    this.loadArticles();
    
  }

  loadArticles(){
    this.articleService.getArticles().subscribe({
      next: (data: any) => {
        this.articles.next(data);

      },
      error: (err) => {
        console.error('Erreur récupération articles', err);

      }
    });
  }
 navigateAddArticle(){
    this.router.navigate(['addArticle']);
  }
}
