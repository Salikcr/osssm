import React, { Component } from 'react'
import axios from 'axios'

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    submitLogin = (e) => {
        e.preventDefault()

        const loginData = {
            username: this.username,
            password: this.password
        }

        console.log(loginData)

        axios.post('users/login', loginData)
            .then(res => {
                console.log(res)
                this.props.submitLogin(res.data.token)
            })
            .catch(e => {
                console.log("error logging in because of ", e)
            })


    }

    render() {
        return (
            <div className="" ref={this.props.containerRef}>
                <div className="">Login</div>
                <div className="content">
                    <div className="">
                        <img src="" />
                    </div>
                    <div className="">
                        <form className="" onSubmit={this.submitLogin}>
                            <div className="">
                                <label htmlFor="username">Username</label>
                                <input onChange={e => this.username = e.target.value} type="text" name="username" placeholder="Username" />
                            </div>
                            <div className="">
                                <label htmlFor="password">Password</label>
                                <input onChange={e => this.password = e.target.value} type="password" name="password" placeholder="Password" />
                            </div>
                            <div className="">
                                <button className="" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

