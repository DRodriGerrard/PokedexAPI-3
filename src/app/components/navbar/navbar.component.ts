import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;

  @Output() generationEmitter = new EventEmitter();
  @Output() searchEmitter = new EventEmitter();

  term:string;

  pokemonGenerations = [
    { name: 'Select', selectable: false },
    { name: 'All', selectable: true },
    { name: 'I Gen', selectable: true },
    { name: 'II Gen', selectable: true },
    { name: 'III Gen', selectable: true },
    { name: 'IV Gen', selectable: true },
    { name: 'V Gen', selectable: true },
    { name: 'VI Gen', selectable: true },
    { name: 'VII Gen', selectable: true }
  ]
  generationSelected = 'All';

  pokemonTypes = [
    { name: 'Select', selectable: false },
    { name: 'All', selectable: true },
    { name: 'normal', selectable: true },
    { name: 'grass', selectable: true },
    { name: 'fire', selectable: true },
    { name: 'water', selectable: true },
    { name: 'fighting', selectable: true },
    { name: 'flying', selectable: true },
    { name: 'poison', selectable: true },
    { name: 'ground', selectable: true },
    { name: 'rock', selectable: true },
    { name: 'bug', selectable: true },
    { name: 'ghost', selectable: true },
    { name: 'electric', selectable: true },
    { name: 'psychic', selectable: true },
    { name: 'ice', selectable: true },
    { name: 'dragon', selectable: true },
    { name: 'dark', selectable: true },
    { name: 'steel', selectable: true },
    { name: 'fairy', selectable: true }
  ]
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

  emitSearch(){
    if(this.term != undefined){
      this.searchEmitter.emit(this.term);
      this.generationSelected = 'Select';
      this.typeSelected = 'Select';
    }
  }

}
