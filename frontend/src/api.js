const base = 'http://feedbackaggregation-fearless-platypus.mybluemix.net/api'


export function getReviews(page=1) {
  const endpoint = '/reviews'
  return fetch(base + endpoint).then(response => response.json()).then(json => {
    console.log(json)
    return json
  })
}
