import React from 'react'
import styled from 'styled-components'
import dateFormat from 'dateformat'

// import Tag from './Tag'
import { Tag, Tile as CarbonTile } from 'carbon-components-react'


const Tile = styled(CarbonTile)`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin: 1rem 0;
  padding-left: 22px;
  /* max-width: 1024px; */
  
  :first-of-type {
    margin: 0 auto auto
  }
`

const SentimentBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: 100%;
  width: 6px;
  background-color: ${({ sentiment }) => sentiment > 0 ? 'mediumseagreen' : 'tomato' };
`

const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: ${({ visible }) => visible ? '1px' : '0px' } solid #ccc;
`

const Content = styled.p`
  padding: 1rem 0;
  font-size: 1.2rem;
  line-height: calc(1.5 + 0.2);
`

const Keyword = styled.span`
  color: ${({ sentiment }) => sentiment > 0 ? 'mediumseagreen' : 'tomato' };
  padding-bottom: 3px;
  border-bottom: 0.13rem solid ${({ sentiment }) => sentiment > 0 ? 'mediumseagreen' : 'tomato' };
`

const Text = styled.span``

function split(text, keywords) {
  const chunks = []

  while (text) {
    const indices = keywords.map(kw => text.indexOf(kw))

    if (indices.some(idx => idx > 0)) {
      const index = Math.min(...(indices.map(i => i === -1 ? Infinity : i)))
      const kw = keywords[indices.indexOf(index)]
      const chunk = text.substring(0, index)
      const keyword = text.substring(index, index + kw.length)

      text = text.substring(index + kw.length, text.length)
      chunks.push(chunk, keyword)
    } else {
      chunks.push(text)
      text = ''
    }
  }

  return chunks
}

function ReviewCard(props) {
  const { raw_watson, text, sentiment } = props.review
  const { keywords } = raw_watson

  const date = dateFormat(new Date(props.review.date))
  const kws = keywords.map(({ text }) => text)
  const scoreMap = Object.fromEntries(keywords.map(({ text, sentiment }) => [ text, sentiment.score ]))
  const chunked = split(text, kws)

  return (
    <Tile>
      <SentimentBar sentiment={sentiment} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ margin: 'auto 0' }}>
            <h1 style={{
              display: 'inline',
              fontSize: '2rem',
              color: sentiment > 0 ? 'mediumseagreen' : '#dc3545',
            }}>
              {(sentiment > 0 ? '+' : '') + sentiment.toFixed(2)}
            </h1>
          </div>
          <span style={{ margin: 'auto 0' }}>{date}</span>
        </div>
        <Divider visible/>
        <Content>
          {chunked && chunked.map((chunk, i) => {
            return kws.includes(chunk) ? <Keyword key={chunk+i} sentiment={scoreMap[chunk]}>{chunk}</Keyword> : <Text key={chunk+i}>{chunk}</Text>
          })}
        </Content>
        <Divider/>
        <div>{kws.map(kw => <Tag key={kw} text={kw} type="gray">{kw}</Tag>)}</div>
      </div>
    </Tile>
  )
}
  
export default ReviewCard