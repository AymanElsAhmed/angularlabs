import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() blogItem: Blog = {
    id: 0,
    title: '',
    link: '',
    keywords: [''],
    creator: [''],
    description: '',
    full_description: '',
    pubDate: '',
    image_url: '',
    country: [''],
    category: [''],
    language: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails() {
    this.router.navigate(['/blog', this.blogItem.id]);
  }
}
