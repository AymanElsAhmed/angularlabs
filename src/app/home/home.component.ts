import { Component, OnInit } from '@angular/core';
import blogList from '../../assets/blogs.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs = blogList;
  constructor() {}

  ngOnInit(): void {}
}
