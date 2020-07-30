import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon:Pokemon;
  @Output() pokemonEmit = new EventEmitter<Pokemon>();
  @Output() pokeNameEmit = new EventEmitter<string>();

  pokeName:string;
  number:string;
  
  constructor() { }

  ngOnInit(): void {
    this.nameUpper();
    this.getPokemonNumber();
  }

  nameUpper(){
    let name = '';
    const upper = this.pokemon.name[0].toUpperCase();
    const whereName = this.pokemon.name.search('-');
    if(this.pokemon.name != 'ho-oh'){
      if(whereName > -1){
        name = this.pokemon.name.slice(1, whereName);
      }
      else{
        name = this.pokemon.name.slice(1, this.pokemon.name.length);
      }
    }
    else{
      name = this.pokemon.name.slice(1, this.pokemon.name.length);
    }
    this.pokeName = upper+name;
  }

  emitPokemon(){
    this.pokemonEmit.emit(this.pokemon);
    this.pokeNameEmit.emit(this.pokeName);
  }

  getPokemonNumber(){
    if(this.pokemon.id < 10){
      this.number = `N.º00${this.pokemon.id}`;
    }
    else if(this.pokemon.id > 10 && this.pokemon.id < 100){
      this.number = `N.º0${this.pokemon.id}`;
    }
    else{
      this.number = `N.º${this.pokemon.id}`;
    }
  }
}
