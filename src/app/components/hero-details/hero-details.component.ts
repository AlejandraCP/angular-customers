import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../app.component';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() costumer: Hero;
  constructor() { }

  ngOnInit() {
  }

}
