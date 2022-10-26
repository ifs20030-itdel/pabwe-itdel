import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {class: 'row'}
})

export class ArticleComponent implements OnInit {
  @Input() title: string;
  @Input() link: string;
  votes = 10;

  constructor() { 
  }

  voteUp() {
    this.votes +=1;
    return false;
  }
  
  voteDown() {
    this.votes -=1;
    return false;
  }

  ngOnInit() {
  }

}
