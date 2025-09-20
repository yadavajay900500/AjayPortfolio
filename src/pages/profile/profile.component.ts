import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  // backgrounds = [
  //   'assets/bg1.jpg',
  //   'assets/bg2.jpg',
  //   'assets/bg3.jpg'
  // ];

  // currentIndex = 0;

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.backgrounds.length;
  //   }, 5000); // change every 5s
  // }



  backgrounds: string[] = ['bg2.jpg','bg1.jpg',  'bg3.jpg'];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    // Change slide every 3 seconds
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.backgrounds.length;
    }, 7000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
