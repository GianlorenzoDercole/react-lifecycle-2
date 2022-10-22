

import FavoriteFoods from './components/FavoriteFoods'
import React , { Component } from 'react'

export default class App extends Component {
  // component is constructed during the mounting phase
  constructor () {
    //get stuff from the component
    super()
    this.state = {
      // text value for a controlled form input
      textValue: '',
      // an array of fav foods that the user has entered
      favorites: []
    }
    console.log('favorite foods has been constructed')
  }
  // runs after the constructed in the mount phase
  // important -- runs only once
  // fetching aou data and putting it on page ( with no user interaction )
  componentDidMount() {
      console.log('favorite foods has mounted')
  }
  // runs everytime the component is re-renderd
  // aka when state changes of this or a parent component
  componentDidUpdate() {
    console.log('favorite foods has updated')
  }

  // happens in the 'unmounting' phase
  // used for things like removing intervals, ent listeners mounted on the DOM
  componentWillUnmount() {
    console.log('favorite foods is unmounting')
  }

  // event handlers

handleChange = e => this.setState({textValue: e.target.value})

handleSubmit = e => {
  e.preventDefault()
}

  // render happens during mounting and updating
  render() {
    return (
      <>
      <h1>React Lifecycle</h1>
      < FavoriteFoods />

      <form onSubmit={this.handleSubmit}>
        <label htmlFor='text-input'>Enter a food</label>
        <input
            type='text'
            id='text-input'
            value={this.state.textValue}
            onChange={this.handleChange}
        />

      </form>
      </>
    )
  }
}
