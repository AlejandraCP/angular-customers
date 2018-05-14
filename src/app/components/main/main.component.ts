import { Component, OnInit } from '@angular/core';
import { Hero } from '../../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  hero: Hero = {
    id: 23,
    name: "Andrea"
  }
  constructor() { }
    
  ngOnInit() {
  }


}
