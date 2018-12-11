import React, { Component } from 'react';


export default class ApiPost extends Component {
  constructor(props) {
    super(props) 
    
    this.state = {
      title: "",
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({title: event.target.value})
    this.setState({rating: event.target.value})
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h1>Add a movie and a rating</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
              Title:
              <input type="text" title={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
              Rating:
              <input type="integer" rating={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}
