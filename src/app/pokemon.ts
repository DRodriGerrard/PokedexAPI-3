export interface Pokemon {
    id: number,
    name: string,
    order: number,
    weight: number,
    abilities: any[],
    sprites: {
        front_default:string
    },
    moves: any[],
    types: any[],
    stats: any[],
    species: {},
    urlAreaEncounters: string
}
