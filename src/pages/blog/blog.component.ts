import { Component } from '@angular/core';


interface BlogPost {
  date: string;
  category: string;
  comments: number;
  title: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
blogPosts: BlogPost[] = [
    {
      date: 'April 14, 2018',
      category: 'Web Design',
      comments: 4,
      title: 'Renovating National Gallery',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: 'assets/images/blog1.jpg'
    },
    {
      date: 'April 14, 2018',
      category: 'Web Design',
      comments: 4,
      title: 'WordPress for a Beginner',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: 'assets/images/blog2.jpg'
    },
    {
      date: 'April 14, 2018',
      category: 'Inspiration',
      comments: 4,
      title: 'Make Website From Scratch',
      description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: 'assets/images/blog3.jpg'
    }
  ];

  // For "Load More" functionality
  visibleCount = 3;

  loadMore() {
    this.visibleCount += 3; // show 3 more posts
  }
}
