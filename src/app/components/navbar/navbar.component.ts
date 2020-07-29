import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Output() generationEmitter = new EventEmitter();

  pokemonGenerations = ['All', 'I Gen', 'II Gen', 'III Gen', 'IV Gen', 'V Gen', 'VI Gen', 'VII Gen'];
  generationSelected = 'All';

  pokemonTypes = ['All', 'normal', 'grass', 'fire', 'water', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'steel', 'fairy'];
  typeSelected = 'All';

  start:number = 0;
  end:number = 807;

  constructor() { }

  ngOnInit(): void {
    this.emitFilter();
  }

  emitFilter(){
    if(this.generationSelected != 'All'){
      if(this.generationSelected == 'I Gen'){
        this.start= 0; 
        this.end =151;
      }
      else if(this.generationSelected == 'II Gen'){
        this.start = 151; 
        this.end = 251;
      }
      else if(this.generationSelected == 'III Gen'){
        this.start = 251; 
        this.end = 386;
      }
      else if(this.generationSelected == 'IV Gen'){
        this.start = 386; 
        this.end = 493;
      }
      else if(this.generationSelected == 'V Gen'){
        this.start = 494; 
        this.end = 649;
      }
      else if(this.generationSelected == 'VI Gen'){
        this.start = 649; 
        this.end = 721;
      }
      else{
        this.start = 721; 
        this.end = 807;
      }
    }
    else{
      this.start = 0;
      this.end = 807;
    }

    let dataFilter = {
      start: this.start,
      end: this.end,
      type: this.typeSelected
    }
    this.generationEmitter.emit(dataFilter);
  }

}
