import React, { Component } from 'react'
import './DogProfile.css'


function PetInfo() {
  return (
    <div>
      <section className="component ">
        <h2>Yor pet's will be displayed here.</h2>
        <div className="card">
          <div className="left-side">
            <div className="pats-dog">
              {/* <img alt="pat-dog" /> */}
            </div>
            <div>
              <p>Name</p>
              <p>Age</p>
            </div>
          </div>
          <div className="right-side">
            {/* <div> */}
            <p>Characteristics</p>
            <ul>
              <li>----</li>
              <li>----</li>
              <li>----</li>
            </ul>
            {/* </div> */}
            <button>View More</button>
          </div>
        </div>
        {/* <div className="card">
    <div>
      <div>
        <img alt="pat-dog" />
      </div>
      <div>
        <p>Name</p>
        <p>age</p>
      </div>
    </div>
    <div>
      <div>
        <p>characteristics</p>
        <ul>
          <li>----</li>
          <li>----</li>
          <li>----</li>
        </ul>
      </div>
      <button>view more</button>
    </div>
  </div>
  <div className="card">
    <div>
      <div>
        <img alt="pat-dog" />
      </div>
      <div>
        <p>Name</p>
        <p>age</p>
      </div>
    </div>
    <div>
      <div>
        <p>characteristics</p>
        <ul>
          <li>----</li>
          <li>----</li>
          <li>----</li>
        </ul>
      </div>
      <button>view more</button>
    </div>
  </div> */}
      </section>
    </div>
  );
}


export default PetInfo