import React from 'react'
import Pokedata from './Pokedata.json'
import Pokeshow from './Pokeshow.js'

class Pokefilter extends React.Component {

    pokeMap = mapPokemon => {
        return mapPokemon.map(noob => <Pokeshow pokediot={noob} />)
    }

    filterByType = type => {
        return Pokedata.pokemon.filter(poke => poke.type.includes(type))
    }


    render() {
        const grass = this.filterByType('Grass')
        const fire = this.filterByType('Fire')
        const flying = this.filterByType('Flying')
        const water = this.filterByType('Water')
        const rock = this.filterByType('Rock')
        const poison = this.filterByType('Poison')

        return (
            <div>

                <ul>
                    <h2> Grass Pokemon </h2>
                    {this.pokeMap(grass)}
                </ul>
                <ul>
                    <h2> Fire Pokemon </h2>
                    {this.pokeMap(fire)}
                </ul>
                <ul>
                    <h2> Flying Pokemon </h2>
                    {this.pokeMap(flying)}
                </ul>
                <ul>
                    <h2> Water Pokemon </h2>
                    {this.pokeMap(water)}
                </ul>
                <ul>
                    <h2> Rock Pokemon </h2>
                    {this.pokeMap(rock)}
                </ul>
                <ul>
                    <h2> Poison Pokemon </h2>
                    {this.pokeMap(poison)}
                </ul>
                

            </div>
        )
    }


}

export default Pokefilter
