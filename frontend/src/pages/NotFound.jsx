import React from 'react'

import { Button } from 'carbon-components-react'
import Container from '../components/Container'
import Undraw from 'react-undraw'


function NotFound() {
  return (
    <Container style={{ margin: 'auto', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Undraw name="a-day-at-the-park" />
      <div style={{ margin: '1.5rem' }} />
      <Button href="#/">Go Back</Button>
    </Container>
  )
}

export default NotFound