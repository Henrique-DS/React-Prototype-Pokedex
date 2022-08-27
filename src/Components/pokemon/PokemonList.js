import React, { Component } from 'react'
import axios from 'axios';

import PokemonCard from './PokemonCard.js'


export default class PokemonList extends Component {
  state = {
      url: 'https://pokeapi.co/api/v2/pokemon/',
      pokemon: null
  };

  async componentDidMount () {
      const res = await axios.get(this.state.url);
      this.setState({pokemon: res.data['results']});
  }

  render() {
    return (
      <div>
        { this.state.pokemon ? (

          <div className="row">
            {this.state.pokemon.map(pokemon => (
                <PokemonCard name={pokemon.name}/>
            ))}
          </div>          

        ) : (
          <h2>Carregando pokemons...</h2>
        )}
      </div>
      
    )
  }
}
