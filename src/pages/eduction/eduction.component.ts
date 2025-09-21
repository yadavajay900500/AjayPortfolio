import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-eduction',
  imports: [],
  templateUrl: './eduction.component.html',
  styleUrl: './eduction.component.scss'
})
export class EductionComponent implements OnInit {
 ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }


}
