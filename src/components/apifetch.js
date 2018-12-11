import React, { Component } from 'react';

export default class ApiFetch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emails: []
    }
  }

  componentWillMount() {
    fetch('https://git.heroku.com/ad-python-andrew2nd.git/return/movies',{
      method: 'GET',
      headers: {
        "accept": "application/json",
        'Content-Type': 'application/json'
      }
    })
    .then(response => { return response.json();})
    .then(responseData => {return responseData;})
    .then(data => {this.setState({emails: data});})

    .catch(err => {
      console.log("Fetch error" + err)
    });
  }
  render() {
    return (
      <div>
        <h1>HERE ARE THE CURRENT MOVIES</h1>
        {this.state.movies.map((data, rating, index) => (
          <div key={index}>
          <p>Title: {data[0]}</p>
          <p>Rating: {data[1]}</p>
          </div>
        ))}
      </div>
    );
  }
}
