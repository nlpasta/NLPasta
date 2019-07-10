import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Tile } from 'carbon-components-react'

const reviews = [
  {
    text: [
      'Sad moments to celebrations, this place has always come through for me with their delicious food. Yes, I use food to cope sometimes. Service is always fast once you get seated and all the employees are attentive in bringing out the dishes you order in a timely manner. If you have never been to a kbbq spot before, the staff there are sure to go over how things work. Once seated, our server immediately asked us our first round of orders so the dishes arrived as we were settling in. Talk about efficiency! However, to make this review have more context, I usually go on the weekdays because weekends are crazy busy from open to close. As I\'m leaving San Jose, my last meal here was delightful and our server Dang was a big part of that. For some odd reason, we ordered more alcohol than food that day and all of it came out to perfection. I\'m sure it was a bit odd since his manager came to our table to verify that we wanted that much alcohol, but we assured her our server was accurate. Their soju mixes are one of the better ones in the South Bay so whenever we go, we usually order a few bottles along with our meal - just this time, 1 person pretty much had 1 bottle to themselves. Great ending to my time in SJ!'
    ],
    sentiment: 5,
    topics: ['food', 'drink', 'restaurant'],
    keywords: [ 'tacos' ],
    question: true
  },
  {
    text: 'Your Taco Truck',
    sentiment: 5,
    topics: ['food', 'drink', 'restaurant'],
    keywords: ['tacos'],
    question: true
  }
]

function App() {
  return (
    <div className="App">
      <div className="container" style={{ margin: 'auto', maxWidth: '1024px' }} >
        {reviews.map(review => 
          <Tile key={review.text} style={{ margin: '2em auto' }}>
            <h2>{review.text}</h2>
          </Tile>
        )}
      </div>
    </div>
  );
}

export default App;
