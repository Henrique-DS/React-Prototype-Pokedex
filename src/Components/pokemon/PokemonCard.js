import React, { Component } from 'react'

class PokemonCard extends Component{
  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-3">
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
      </div>
    )
  }
}

export default PokemonCard;