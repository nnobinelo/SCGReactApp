import React, { Component } from 'react'
import GameDiv from '../layout/GameDiv'
import M from 'materialize-css'
import { getCollection } from '../../firebasePreloader'

class Home extends Component {
    constructor(props) {
        super(props)

        this.gameDivs = Object.entries(getCollection('GameDivs'))
    }

    componentDidMount() {
        M.Parallax.init(document.querySelectorAll('.parallax'));
    }

    render() {
        return (
            <div className="home">
                {this.gameDivs && this.gameDivs.map(game => {
                    // the first item in game is its key and the second is the GameDiv object due to Object.entries
                    return (
                        <GameDiv featureGraphic={game[1].featureGraphic} supplementalMaterials={game[1].supplementalMaterials} summary={game[1].summary} key={game[0]} />
                    )
                })}
            </div>
        )
    }
}

export default Home