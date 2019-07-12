import React from 'react'
import styled from 'styled-components'

import { Tag } from 'carbon-components-react'


function Tag(props) {
  const { text, type } = props

  return <Tag>{text}</Tag>
}

export default Tag