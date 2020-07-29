import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  pokemon: Pokemon;
  listPokemon:Pokemon[] = [];
  finalPokemonList:Pokemon[] = [];

  constructor(private _pokemonS: PokemonService, private _httpS: HttpClient) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  async getAllPokemon(){
    await this._pokemonS.getAllPokemon()
    .subscribe(response => {
      response.results.forEach(pokemonURL =>
        this._pokemonS.getAllPokemonData(pokemonURL.url)
        .subscribe(pokemonData => this.makePokemon(pokemonData))
      )
    })
  }

  makePokemon(pokemonData){
    this.pokemon = pokemonData;
    this.listPokemon.push(this.pokemon);
    this.finalPokemonList = this.listPokemon.sort(function(a,b){
      if(a.id <b.id) return -1;
      else if(a.id > b.id) return 1;
      return 0;
    })
  } 

  getFilter(dataFilter){
    this.finalPokemonList = [];
    const pokeFilterData = this.listPokemon.slice(dataFilter.start, dataFilter.end);

    if(dataFilter.type != 'All'){
      pokeFilterData.forEach(pokemon => {
        const filter = pokemon.types.some(type => type.type.name == dataFilter.type);
        if(filter){
          this.finalPokemonList.push(pokemon);
        }
      })
    }
    else{
      this.finalPokemonList = pokeFilterData;
    }
  }
}
