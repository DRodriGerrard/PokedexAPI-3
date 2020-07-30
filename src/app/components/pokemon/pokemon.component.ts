import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon:Pokemon;

  pokeName:string;
  whereName: number;

  constructor() { }

  ngOnInit(): void {
    this.nameUpper();
  }

  nameUpper(){
    let name = '';
    const upper = this.pokemon.name[0].toUpperCase();
    this.whereName = this.pokemon.name.search('-');
    if(this.whereName > -1){
      name = this.pokemon.name.slice(1, this.whereName);
    }
    else{
      name = this.pokemon.name.slice(1, this.pokemon.name.length);
    }
    this.pokeName = upper+name;
  }
}
