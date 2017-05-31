import React,{Component} from 'react'
import './PokedexPokemon.css'
import {Route} from 'react-router-dom'

class PokedexPokemon extends Component{
    state={
        pokemon:{
            id:'',
            name:'',
            height:'',
            weight:'',
            types:'',
            html_url:'',
            sprites:'',
        }
    }
    constructor(props){
        super(props)
        this.fetchUserData(props)
    }

    fetchUserData=(props)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.username}`)
            .then(response=>response.json())
            .then(pokemon=>this.setState({pokemon}))
            .then(this.getTypes)
    }

    componentWillReceiveProps=(nextProps)=>{
        const locationChanged=nextProps.location!==this.props.location
        if(locationChanged){
            this.fetchUserData(nextProps)
        }
    }

    render(){
        const {pokemon}=this.state
        return(
            <div className="pokedex-user">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <h2>Id: {pokemon.id}</h2>
                <h2>Name: {pokemon.name}</h2>
                <h3>Height: {pokemon.height}</h3>
                <h3>Weight: {pokemon.weight}</h3>

            </div>
        )
    }
}


export default PokedexPokemon