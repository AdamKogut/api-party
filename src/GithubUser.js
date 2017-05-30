import React,{Component} from 'react'
import './Github.css'
import {Route} from 'react-router-dom'

class Github extends Component{
    render(){
        return(<h1>USER: {this.props.match.params.username}</h1>
        )
    }
}

export default Github