import React, { useEffect, useState } from 'react';

import Container from './components/Container'
import {
  Header as CarbonHeader,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell"
import ReviewCard from './components/ReviewCard';
import { getReviews } from './api';

const reviews = [
  {
    text: [
      'Sad moments to celebrations, this place has always come through for me with their delicious food. Yes, I use food to cope sometimes. Service is always fast once you get seated and all the employees are attentive in bringing out the dishes you order in a timely manner. If you have never been to a kbbq spot before, the staff there are sure to go over how things work. Once seated, our server immediately asked us our first round of orders so the dishes arrived as we were settling in. Talk about efficiency! However, to make this review have more context, I usually go on the weekdays because weekends are crazy busy from open to close. As I\'m leaving San Jose, my last meal here was delightful and our server Dang was a big part of that. For some odd reason, we ordered more alcohol than food that day and all of it came out to perfection. I\'m sure it was a bit odd since his manager came to our table to verify that we wanted that much alcohol, but we assured her our server was accurate. Their soju mixes are one of the better ones in the South Bay so whenever we go, we usually order a few bottles along with our meal - just this time, 1 person pretty much had 1 bottle to themselves. Great ending to my time in SJ!'
    ],
    sentiment: 5,
    topics: ['food', 'drink', 'restaurant'],
    keywords: [ 'tacos' ],
    question: true,
    submitter: 'Barack Obama',
    submissionDate: '9/10/2019'
  },
  {
    text: 'Your Taco Truck',
    sentiment: -2,
    topics: ['food', 'drink', 'restaurant'],
    keywords: ['tacos'],
    question: true,
    submitter: 'Donald Trump',
    submissionDate: '9/2/2019'
  },
  {
    text: 'Your Taco Truck',
    sentiment: -2,
    topics: ['food', 'drink', 'restaurant'],
    keywords: ['tacos'],
    question: true,
    submitter: 'Donald Trump',
    submissionDate: '9/2/2019'
  },
  {
    text: 'Your Taco Truck',
    sentiment: -2,
    topics: ['food', 'drink', 'restaurant'],
    keywords: ['tacos'],
    question: true,
    submitter: 'Donald Trump',
    submissionDate: '9/2/2019'
  },
  {
    text: 'Your Taco Truck',
    sentiment: -2,
    topics: ['food', 'drink', 'restaurant'],
    keywords: ['tacos'],
    question: true,
    submitter: 'Donald Trump',
    submissionDate: '9/2/2019'
  },
  {
    text: 'Your Taco Truck',
    sentiment: -2,
    topics: ['food', 'drink', 'restaurant'],
    keywords: ['tacos'],
    question: true,
    submitter: 'Donald Trump',
    submissionDate: '9/2/2019'
  },
  {
    text: 'Your Taco Truck',
    sentiment: -2,
    topics: ['food', 'drink', 'restaurant'],
    keywords: ['tacos'],
    question: true,
    submitter: 'Donald Trump',
    submissionDate: '9/2/2019'
  },
]

function Header() {
  return (
    <CarbonHeader aria-label="IBM Platform Name">
      <Container>
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
      {/* <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
        <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
          <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation> */}
      </Container>
    </CarbonHeader>
  )
}

function App() {
  const [ reviews, setReviews ] = useState([])

  useEffect(() => {
    getReviews().then(reviews => {
      console.log(reviews)
      setReviews(reviews)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <div id='nav-spacer' style={{ height: 'calc(48px + 1rem)' }} />
      <div className="container" style={{ margin: 'auto', maxWidth: '1024px' }} >
        {reviews.map(review => <ReviewCard review={{...review, sentiment: 4, topics: ['food'] }} />)}
      </div>
    </div>
  );
}

export default App;
