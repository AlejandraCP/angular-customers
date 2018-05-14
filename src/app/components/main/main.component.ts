import { Component, OnInit } from '@angular/core';
import { Hero } from '../../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HEROES } from '../../mock-heroes'
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // hero: Hero = {
  //   id: 23,
  //   name: "Andrea"
  // }

  selectedHero: Hero;

  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(costumer: Hero): void {
    this.selectedHero = costumer;
  }
  
}
