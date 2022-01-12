import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class App extends Component {
    state = {
        advice: ''
    }

    componentDidMount(){
       this.fetchAdvice();
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then(reponse =>{
            const {advice}=reponse.data.slip

            this.setState({
                advice
            })
        }
        )
        .catch(error =>
            console.log(error)
            )
    }

    render() {
        const{advice}=this.state
        return (
            <div className='app'>
                <div className='card'>
                    <div className='heading'>
                    <h1>{advice}</h1>
                    </div>
                    <button className='button' onClick={this.fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        )
    }
}
