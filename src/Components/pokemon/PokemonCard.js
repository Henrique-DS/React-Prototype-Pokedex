import React, { Component } from 'react'

export default class PokemonCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
      </div>
    )
  }
}
