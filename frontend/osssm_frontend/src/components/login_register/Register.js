import React, { Component } from 'react'
import axios from 'axios'

export class Register extends Component {
    constructor(props) {
        super(props)
    }

    submitRegister = (e) => {
        e.preventDefault()
        const registerData = {
            firstname : '',
            lastname : '',
            username : this.username,
            email : this.email,
            password : this.password
        }
        
        axios.post('users/signup', registerData)
            .then(res => {
                console.log("then", res)
            })
            .catch(e => {
                console.log("error", e)
            })
    }
    
    render() {
        return (
            <div className=""  ref={this.props.containerRef}>
                <div className="">Register</div>
                <div className="">
                    <div className="">
                        <img src=""/>
                    </div>
                    <div className="">
                        <form className="" onSubmit={this.submitRegister}>
                            <div class="">
                                <label htmlFor="username">Username</label>
                                <input onChange={e => this.username = e.target.value} type="text" name="username" placeholder="Username"/>
                            </div>
                            <div class="">
                                <label htmlFor="email">Email</label>
                                <input onChange={e => this.email = e.target.value}  type="email" name="email" placeholder="Email Id"/>
                            </div>
                            <div class="">
                                <label htmlFor="password">Password</label>
                                <input onChange={e => this.password = e.target.value}  type="password" name="password" placeholder="Password"/>
                            </div>
                            <div className="">
                                <button className="" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
