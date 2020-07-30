import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type PokemonURL = {
  results: any[],
  url: string
}

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private _httpS: HttpClient) { }

  ngOnInit(){  }

  getAllPokemon(){
    return this._httpS.get<PokemonURL>(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=807`);
  }

  getAllPokemonData(url){
    return this._httpS.get<PokemonURL>(url);
  }
  
}
