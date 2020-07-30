import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/pokemon';
import { ThrowStmt } from '@angular/compiler';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.sass']
})
export class PokemondetailComponent implements OnInit {

  @Input() pokemonDetail:Pokemon;
  @Input() pokeName:string;

  male = {
    front:'',
    back:''
  }
  female= {
    front:'',
    back:''
  }
  number:string;
  pokemon:Pokemon;
  weight:string;
  height:string;

  constructor(private _pokemonS:PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
    this.getPokemonImages();
    this.getPokemonNumber();
    this.getPokemonSize();
  }

  getPokemon(){
    this.pokemon = this.pokemonDetail;
  }

  getPokemonImages(){
    this.male.front = this.pokemonDetail.sprites.front_default;
    this.male.back = this.pokemonDetail.sprites.back_default;
    this.female.front = this.pokemonDetail.sprites.front_female;
    this.female.back = this.pokemonDetail.sprites.back_female;
  }

  changeImages(){
    if(this.male.front == this.pokemonDetail.sprites.front_default){
      this.male.front = this.pokemonDetail.sprites.front_shiny;
      this.male.back = this.pokemonDetail.sprites.front_shiny;
      this.female.front = this.pokemonDetail.sprites.front_shiny_female;
      this.female.back = this.pokemonDetail.sprites.back_shiny_female;
    }
    else{
      this.male.front = this.pokemonDetail.sprites.front_default;
      this.male.back = this.pokemonDetail.sprites.back_default;
      this.female.front = this.pokemonDetail.sprites.front_female;
      this.female.back = this.pokemonDetail.sprites.back_female;
    }
  }

  getPokemonNumber(){
    if(this.pokemonDetail.id < 10){
      this.number = `N.º00${this.pokemonDetail.id}`;
    }
    else if(this.pokemonDetail.id > 10 && this.pokemonDetail.id < 100){
      this.number = `N.º0${this.pokemonDetail.id}`;
    }
    else{
      this.number = `N.º${this.pokemonDetail.id}`;
    }
  }

  getPokemonSize(){
    const divisorWeight = this.pokemonDetail.weight / 10;
    this.weight = `${divisorWeight} Kg`;
    
    const divisorHeight = this.pokemonDetail.height / 10;
    this.height = `${divisorHeight} m`;
  }

 



}
