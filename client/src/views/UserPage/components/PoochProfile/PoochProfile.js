import React, { Component } from 'react';
import './PoochProfile.css';
import Pets from '../Pets/Pets.js';

const initState = {
  userId: ""
}

class PetInfo extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  async componentDidMount() {
    const urlQuerries = new URLSearchParams(window.location.search);
    const userId = urlQuerries.get("user_id");
    this.setState({ userId: userId });
  }

  render() {
    return (
      <div>
        <div className="container mb-3 justify-content-center">
          <h2>Pets</h2>
        </div>
        <Pets user={this.state.userId} />
      </div >
    );
  }
}


export default PetInfo