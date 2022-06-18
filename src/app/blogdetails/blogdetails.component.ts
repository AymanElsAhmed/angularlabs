import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../interfaces/blog';
import blogList from '../../assets/blogs.json';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css'],
})
export class BlogdetailsComponent implements OnInit {
  blogItem: any;

  constructor(private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.params['id'];
    this.blogItem = blogList.find((blog) => blog.id == id);
  }

  ngOnInit(): void {}
}
