import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  category: string;
  image: string;
}
@Component({
  selector: 'app-work-projects',
  imports: [CommonModule],
  templateUrl: './work-projects.component.html',
  styleUrl: './work-projects.component.scss'
})
export class WorkProjectsComponent {
 categories: string[] = ['All', 'Graphic Design', 'Web Design', 'Software', 'Apps'];
  selectedCategory: string = 'All';

  projects: Project[] = [
    { title: 'Creative Food Layout', category: 'Graphic Design', image: 'p4.jpg' },
    { title: 'Red Sneakers', category: 'Web Design', image: 'p5.jpg' },
    { title: 'ERP Software Dashboard', category: 'Software', image: 'p6.jpg' },
    { title: 'Mobile Health App', category: 'Apps', image: 'p1.jpg' },
    { title: 'Portfolio Website', category: 'Web Design', image: 'p2.jpg' },
    { title: 'Marketing Dashboard', category: 'Software', image: 'p7.jpg' }
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  filterCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
