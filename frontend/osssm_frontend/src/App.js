import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login_register/Index';
import { Register } from './components/login_register/Index';


class App extends Component {
  constructor(props) {
    super(props)
  
    //localStorage.clear()
    const t = localStorage.getItem('token')

    this.state = {
       lvri : true,
       token : t
    }
  }

  changeState() {
    const { lvri} = this.state
    
    if(lvri){
      this.rightSide.classList.remove("right")
      this.rightSide.classList.add("left")
    } else {
      this.rightSide.classList.remove("left")
      this.rightSide.classList.add("right")
    }
    this.setState( (prevState) => ({
      lvri : !prevState.lvri
    }))
  }

  submitLogin = (t) => {
    console.log("login submitted , token is = " + t)
    localStorage.setItem('token', t)
    this.setState({
      token : t
    })
  } 
  
  render() {
    const { lvri, token } = this.state 
    const current = lvri ? "Register" : "Login"
    if(token) {
      return <div>{token}</div>
    } else{
      return (
        <div className="App">
          <div className="login">
            <div className="container" ref={ref => this.container = ref}>
              { lvri && <Login submitLogin={this.submitLogin} containerRef={ref => this.current = ref}/>}
              { !lvri && <Register containerRef={ref => this.current = ref}/>}
            </div>
            <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
          </div>
        </div>
      )
    }
    }
    
}

const RightSide = props => {
  return (
      <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
          <div>
              <div>{props.current}</div>
          </div>
      </div>
  )
}

export default App;
