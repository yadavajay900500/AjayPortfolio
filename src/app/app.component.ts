import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from "../pages/experience/experience.component";
import { ProjectsComponent } from "../pages/experience/projects/projects.component";
import { SkillsComponent } from "../pages/skills/skills.component";
import { AboutComponent } from "../pages/about/about.component";
import { ProfileComponent } from "../pages/profile/profile.component";
import {  AfterViewInit, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { WorkProjectsComponent } from "../pages/work-projects/work-projects.component";
import { BlogComponent } from "../pages/blog/blog.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ExperienceComponent, ProjectsComponent, SkillsComponent, AboutComponent, ProfileComponent, WorkProjectsComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'AjayPortfolio';
  activeSection: string = 'home';
  menuOpen: boolean = false;

  @ViewChild('contactSection') contactSection!: ElementRef<HTMLElement>;
  @ViewChild('homeSection') homeSection!: ElementRef<HTMLElement>;
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('skillsSection') skillsSection!: ElementRef<HTMLElement>;
  @ViewChild('projectsSection') projectsSection!: ElementRef<HTMLElement>;
  @ViewChild('experienceSection') experienceSection!: ElementRef<HTMLElement>;
  @ViewChild('educationSection') educationSection!: ElementRef<HTMLElement>;

  sections!: ElementRef<HTMLElement>[];

  ngAfterViewInit(): void {
    // Array of sections
    this.sections = [
      this.homeSection,
      this.aboutSection,
      this.skillsSection,
      this.projectsSection,
      this.experienceSection,
      this.educationSection,
      this.contactSection
    ];

    // Intersection Observer for scrollspy and animations
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          const el = entry.target as HTMLElement;

          // Update active section
          if (entry.isIntersecting) {
            this.activeSection = el.id;
          }

          // Animate contact section
          if (el.id === 'contact' && entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-x-10');
            el.classList.add('opacity-100', 'translate-x-0');
          }
        });
      },
      { threshold: 0.4 } // triggers when 40% of section is visible
    );

    this.sections.forEach(section => observer.observe(section.nativeElement));
  }

  // Smooth scroll for nav links
  scrollToSection(section: ElementRef<HTMLElement>): void {
    section.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  downloadPDF(): void {
    window.open('assets/resume.pdf', '_blank');
  }

  onSubmit(){

  }
}
