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
    title: 'Full Stack Developer',
    company: 'Marg ERP Limited, Netaji Subhash Place, Delhi, 110035',
    period: '1 July 2025 — Present',
    tasks: [
      'Developing and maintaining ERP and enterprise applications using Angular, .NET Core, SQL Server, and MongoDB.',
      'Implementing responsive and user-friendly front-end interfaces with Angular.',
      'Building scalable server-side components and APIs with .NET Core.',
      'Collaborating with cross-functional teams to deliver solutions that meet client business requirements.',
      'Managing data integration and storage using SQL Server and MongoDB for reliability and scalability.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Quickcomm Technologies, Noida, Uttar Pradesh',
    period: 'March 2024 — 24 June 2025',
    tasks: [
      'Developed web applications to streamline interdepartmental data sharing, sales tracking, and project management using Angular 8, React JS, .NET Core, and SQL Server.',
      'Conducted module testing, designed test cases, and proposed optimized solutions to improve software quality.',
      'Created software development plans aligned with client needs and modern technology trends.',
      'Worked across multiple domains including software, applications, and outsourcing, serving clients such as Ceasefire Industries Pvt Ltd.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'WROCUS Technologies Private Limited, Noida, Uttar Pradesh',
    period: 'July 2022 — March 2024',
    tasks: [
      'Developed and maintained web-based and client applications using .NET, C#, Angular, Windows Forms, and JavaScript.',
      'Worked on diverse domains including software, applications, and outsourcing with clients like Ceasefire Industries Pvt Ltd and Doceree.',
      'Built and maintained a CRM system for Ceasefire Industries using .NET Core, Angular, and SQL Server.',
      'Developed healthcare data management applications for Doceree using Node.js, Angular, and MongoDB.'
    ]
  }
];

}
