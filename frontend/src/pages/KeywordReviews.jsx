import React, { useState, useEffect } from 'react'
import { getReviews, getReviewsByKeyword } from '../api';

import { Redirect } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'
import { Search } from 'carbon-components-react'


function KeywordReviews(props) {
  const { bid, keyword } = props
  const [ reviews, setReviews ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ redirect, setRedirect ] = useState(false)

  useEffect(() => {
    (keyword ? getReviewsByKeyword(bid, keyword) : getReviews(bid))
      .then(setReviews)
  }, [ bid, keyword ])

  return (
    <>
      {redirect && <Redirect to={`/${searchTerm.replace(/\s/g, '-')}`} />}
      <Search
        style={{ backgroundColor: '#fff' }}
        placeHolderText="Find your keywords (e.g. staff or location)"
        labelText="Keyword search"
        onChange={event => {
          const value = event.currentTarget.value
          if (value !== searchTerm)
            setSearchTerm(value)
        }}
        onKeyDown={event => {
          if (event.key === 'Enter')
            setRedirect(true)
        }}
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