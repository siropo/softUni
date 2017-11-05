import React, { Component } from 'react'

import PokemonField from './formFields/PokemonField'
import Input from './formFields/Input'

class PokeIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonName: '',
            pokemonImg: '',
            pokemonInfo: '',
            data: { pokemonColection: [] }
        }

        this.submitPokemon = this.submitPokemon.bind(this);
        this.addPokemon = this.addPokemon.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then((data) => {
                return data.json();
            })
            .then(d => {
                console.log(d);
                this.setState({ data: d })
            })
    }

    submitPokemon(e) {
        e.preventDefault();
        let payload = {
            pokemonName: this.state.pokemonName,
            pokemonImg: this.state.pokemonImg,
            pokemonInfo: this.state.pokemonInfo
        }

        this.addPokemon(payload);
    }

    addPokemon(payload) {
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                fetch('http://localhost:5000/pokedex/roster')
                    .then((data) => {
                        return data.json();
                    })
                    .then(d => {
                        console.log(d);
                        this.setState({ data: d })
                    })
            })

    }

    render() {
        const validName = this.state.pokemonName !== '';
        const validImg = this.state.pokemonImg.length > 3;
        const validInfo = this.state.pokemonInfo.length > 3 &&
            this.state.pokemonInfo.length < 50;

        return (
            <div>
                <fieldset>
                    <form action="" onSubmit={this.submitPokemon}>
                        <h2>Submit pokemon</h2>
                        <Input
                            type='text'
                            data='pokeName'
                            name='Pokemon Name'
                            func={e => {
                                this.setState({ pokemonName: e.target.value })
                            }}
                            valid={validName}
                        />
                        <Input
                            type='text'
                            data='pokeImage'
                            name='Pokemon Image'
                            func={e => {
                                this.setState({ pokemonImg: e.target.value })
                            }}
                            valid={validImg}
                        />
                        <Input
                            type='text'
                            data='pokeBio'
                            name='Pokemon Info'
                            func={e => {
                                this.setState({ pokemonInfo: e.target.value })
                            }}
                            valid={validInfo}
                        />
                        <input
                            style={({ "display": (validImg && validName && validInfo) === true ? '' : 'none' })}
                            type='submit'
                            value='submit'
                        />
                    </form>
                </fieldset>
                <div style={{ display: 'inline-block' }}>
                    {this.state.data.pokemonColection
                        .map((pokemon, index) => {
                            return <PokemonField
                                key={index}
                                data={pokemon}
                            />
                        })}
                </div>
            </div>
        )
    }
}

export default PokeIndex;