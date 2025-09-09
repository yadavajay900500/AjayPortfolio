import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = [
    {
      title: 'FCM Device Token Utility (React Native)',
      description: 'Generates FCM tokens for QA; integrates with .NET Core API for test notifications.',
      image: 'assets/projects/fcm-tool.png',
      live: '#',
      source: '#',
      delay: 0.1
    },
    {
      title: 'Portfolio Website (Angular)',
      description: 'Fully responsive developer portfolio with animations and Tailwind CSS.',
      image: 'assets/projects/portfolio.png',
      live: '#',
      source: '#',
      delay: 0.3
    },
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Automated builds & deployments with GitHub Actions and Docker.',
      image: 'assets/projects/cicd.png',
      live: '#',
      source: '#',
      delay: 0.5
    }
  ];
}
