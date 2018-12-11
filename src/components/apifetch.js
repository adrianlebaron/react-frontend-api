import React, { Component } from 'react';

export default class ApiFetch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emails: []
    }
  }

  componentWillMount() {
    fetch('https://ads-python-flask-app.herokuapp.com/return_emails',{
      method: 'GET',
      headers: {
        "accept": "application/json",
        'Content-Type': 'application/json'
      }
    })
    .then(response => { return response.json();})
    .then(responseData => {console.log(responseData); return responseData;})
    .then(data => {this.setState({emails: data});})

    .catch(err => {
      console.log("fetch error" + err)
    });
  }
  render() {
    return (
      <div className='apiCaller'>
        <h1>This is My awesome Api Caller</h1>
        <h3>Please mess with me more</h3>
         {this.state.emails.map((email, index) => (
          <p key={index}> Email: {email} </p>
         ))}
      </div>
    );
  }
}
