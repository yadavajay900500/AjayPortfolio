import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from "../pages/experience/experience.component";
import { ProjectsComponent } from "../pages/experience/projects/projects.component";
import { SkillsComponent } from "../pages/skills/skills.component";
import { AboutComponent } from "../pages/about/about.component";
import { ProfileComponent } from "../pages/profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ExperienceComponent, ProjectsComponent, SkillsComponent, AboutComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AjayPortfolio';
    menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

downloadPDF() {
  const link = document.createElement('a');
  link.href = '/assets/Ajay_Yadav_Resume_DotNet_And_Angular_Developer.pdf';
  link.download = 'resume.pdf';
  link.click();
}



  closeMenu() {
    this.menuOpen = false;   // 👈 force close
  }


    currentYear = new Date().getFullYear(); 
 onSubmit() {
    alert('Thank you! Your message has been sent 🚀');
    // Later: integrate with EmailJS, Firebase, or your backend API
  }
}
