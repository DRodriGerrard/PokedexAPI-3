import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon:Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
