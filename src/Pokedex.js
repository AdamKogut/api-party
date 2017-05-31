import React,{Component} from 'react'
import './Pokedex.css'
import {Route} from 'react-router-dom'
import PokedexPokemon from './PokedexPokemon'

class Pokedex extends Component{
    state={
        username:'',
    }

    handleChange=(ev)=>{
        const username=ev.currentTarget.value
        this.setState({username})
    }

    handleSubmit=(ev)=>{
        ev.preventDefault()
        this.props.history.push(`/pokemon/${this.state.username}`)
    }
    render(){
        return(
            <div className="pokedex">
                <img className="pokedex-logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon logo"/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type="submit">Look up Github user</button>
                    </div>
                </form>
                <Route path='/pokedex/:username' component={PokedexPokemon}/>
                <Route exact path='/pokedex' render={()=><h3>Please enter a username to search on github</h3>}/>
            </div>
        )
    }
}

export default Pokedex
