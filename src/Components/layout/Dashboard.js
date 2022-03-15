import React, { Component } from 'react'

import PokemonList from '../pokemon/PokemonList.js'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <div className="container">
            <div className="row">
                <PokemonList/>
            </div>
          </div>
      </div>
    )
  }
}
