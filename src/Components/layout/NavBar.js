import React, { Component } from 'react';
import '../../App.css';
import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md fixed-top" >
                    <div className="container-fluid">
                    <a>Pokedex</a>
                    </div>
                </nav>

            </div>
        )
    }
}
