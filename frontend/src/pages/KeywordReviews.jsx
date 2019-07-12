import React, { useState, useEffect } from 'react'
import { getReviews, getReviewsByKeyword } from '../api';

import ReviewCard from '../components/ReviewCard'
import { Search } from 'carbon-components-react'


function KeywordReviews(props) {
  const { bid, keyword } = props
  const [ reviews, setReviews ] = useState([])

  useEffect(() => {
    (keyword ? getReviewsByKeyword(bid, keyword) : getReviews(bid))
      .then(setReviews)
  }, [ bid, keyword ])

  return (
    <>
      <Search
        style={{ backgroundColor: '#fff' }}
        placeHolderText="Find your keywords (e.g. staff or location)"
        labelText="Keyword search"
      />
      {reviews.map(review => (
        <ReviewCard
          key={review.review_id}
          review={review}
        />
      ))}
    </>
  )
}

export default KeywordReviews