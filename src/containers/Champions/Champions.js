import React, { Component } from 'react';
import axios from 'axios'
import ChampionsGrid from '../../components/ChampionsGrid/ChampionsGrid'

class Champions extends Component {
  state = {
    champions: null,
  }
  componentDidMount() {
    axios
    .get('https://api.myjson.com/bins/ggj4o')
    .then(response => (
      this.setState({champions: response.data})
    ))
    .catch(errors => console.log('errors'))
  }
  

  render() {

    return (
      <div >
        <ChampionsGrid champions={this.state.champions}/>
      </div>
    );
  }
}

export default Champions;



