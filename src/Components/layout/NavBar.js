import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
                    <div className="container-fluid">
                        <a className="navbar-brand">Pokedex</a>
                    </div>
                </nav>
            </div>
        )
    }
}
