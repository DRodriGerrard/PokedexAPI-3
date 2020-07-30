export interface Pokemon {
    id: number,
    name: string,
    order: number,
    weight: number,
    height: number,
    abilities: any[],
    sprites: {
        front_default:string,
        back_default:string,
        front_female: string,
        back_female:string,
        front_shiny:string,
        back_shiny:string,
        front_shiny_female:string,
        back_shiny_female:string
    },
    moves: any[],
    types: any[],
    stats: any[],
    species: {},
    urlAreaEncounters: string
}
