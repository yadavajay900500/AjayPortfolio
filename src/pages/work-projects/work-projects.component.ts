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
    { title: 'Creative Food Layout', category: 'Graphic Design', image: 'assets/projects/food.jpg' },
    { title: 'Red Sneakers', category: 'Web Design', image: 'assets/projects/sneakers.jpg' },
    { title: 'ERP Software Dashboard', category: 'Software', image: 'assets/projects/erp.jpg' },
    { title: 'Mobile Health App', category: 'Apps', image: 'assets/projects/healthapp.jpg' },
    { title: 'Portfolio Website', category: 'Web Design', image: 'assets/projects/portfolio.jpg' },
    { title: 'Marketing Dashboard', category: 'Software', image: 'assets/projects/dashboard.jpg' }
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  filterCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
