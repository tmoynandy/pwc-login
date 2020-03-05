import React, { Component } from 'react';
import './style.css'
import axios from 'axios'

export default class Login extends Component {

  state = {
    form : {username : '', password : ''},
    formValid : false,
  }

  onChange = (event) =>{
    let formObj = this.state.form
    formObj[event.target.name] = event.target.value
    this.setState({form : formObj})
    this.formCheck()
  }

  formCheck = () =>{
    if(this.state.form.username.length > 0 && this.state.form.password.length > 0)
      this.setState({formValid : true})
    else
      this.setState({formValid : false})
  }

  onSubmit = (event) =>{
    event.preventDefault()
    console.log("data to be submitted", this.state.form)
    axios.post('http://18.139.7.118:9090/login', this.state.form)
      .then(res =>{
        console.log(res.data)
      })
  }

  render() {
    return (
      <React.Fragment>
      <div className = "row align-items-center">
      // {JSON.stringify(this.state.form)}
        <div className = "col col-md-2">
        </div>
        <div className = "col">
          <div className="card">
          <div className="card-body">
            <form onSubmit = {this.onSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="username" aria-describedby="emailHelp" placeholder="Enter username" onChange = {this.onChange} />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" onChange = {this.onChange} />
              </div>
              <button type="submit" className="btn btn-primary" disabled = {!this.state.formValid}>Submit</button>
            </form>
          </div>
        </div>
        </div>
        <div className = "col col-md-2">
        </div>
      </div>
        

      </React.Fragment>
    )
  }
}
