import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
experiences = [
    {
      title: 'Software Developer',
      company: 'Company XYZ',
      period: '2022 — Present',
      tasks: [
        'Built and maintained .NET Core APIs and Angular frontends.',
        'Implemented JWT auth; reduced API latency by 30%.',
        'Led migration to CI/CD (GitHub Actions) with zero-downtime deploys.'
      ]
    },
    {
      title: 'Intern Developer',
      company: 'Company ABC',
      period: '2021 — 2022',
      tasks: [
        'Assisted in building REST APIs with ASP.NET Core.',
        'Created responsive dashboards with Angular & Tailwind.',
        'Optimized database queries, improving performance by 20%.'
      ]
    }
  ];
}
