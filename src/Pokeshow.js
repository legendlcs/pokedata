import React from 'react'

class Pokeshow extends React.Component {
    render () {
        const pokemone = this.props.pokediot
    
    return (
        <li> 
            {pokemone.name} : {pokemone.height} : {pokemone.weight}
        </li>
    )
    
    }

}

export default Pokeshow