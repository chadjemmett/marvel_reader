import React, { Component } from 'react';
import axios from 'axios';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    }
  }



    componentDidMount() {
      axios.get("https://marvel.fandom.com/api/v1/Articles/Details?ids=50&titles=Amazing_Spider-Man_Vol_1_200&abstract=100&width=200&height=200")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }
  render() {
    return (
      <div className="App">
      hello world
      </div>
    );
  }
}

export default Reader;
