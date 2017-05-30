import React,{Component} from 'react'
import './Github.css'
import {Route} from 'react-router-dom'

class Github extends Component{
    constructor(props){
        super(props)
        this.fetchUserData()
    }

    fetchUserData=()=>{
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
            .then(response=>response.json())
            .then(user=>console.log(user))
            .catch(console.log(Error))
    }

    render(){
        return(<h1>USER: {this.props.match.params.username}</h1>
        )
    }
}

export default Github