import React, { Component } from 'react';
import './CountDownClass.scss'

export default class CountDownClass extends Component {
    state={
        count:10
    }
    ontimesup = ()=>{
        alert('Time sup');
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                count : this.state.count -1
            })
        },1000)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count!==this.state.count&&this.state.count===0){
            if(this.timer){
                clearInterval(this.timer);
                this.ontimesup();
            }
        }

    }
  render() {
    return (
      <div className='countdownclass-container'>
        {this.state.count}
      </div>
    )
  }
}


