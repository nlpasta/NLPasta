import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { getBusinesses, getReviews, getKeywords } from './api';

import {
  Header as CarbonHeader,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavItem
} from "carbon-components-react/lib/components/UIShell"
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import KeywordReviews from './pages/KeywordReviews';


function Header(props) {
  const Wrapper = styled(CarbonHeader)`
    background-color: #152934 !important;

    .bx--side-nav {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
  `

  const { keywords, header } = props
  const negativeKeywords = keywords.slice(0, 10)
  const positiveKeywords = keywords.slice(keywords.length - 10, keywords.length)

  return (
    <Wrapper
      aria-label="IBM Platform Name"
      style={{ backgroundColor: '#152934' }}
    >
      <HeaderName href="#" prefix="" style={{ fontSize: '1.3rem' }}>
        NLPasta
      </HeaderName>
      <SideNav
        aria-label="Side navigation"
        expanded
      >
        <SideNavItems>
          <SideNavItem>
            <div style={{
              width: '100%',
              padding: '0 16px',
              margin: '1rem 0 1.6rem',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              {header}
            </div>
          </SideNavItem>
          <SideNavMenu title="Positive Keywords" defaultExpanded>
            {positiveKeywords.reverse().map(({ keyword, meta_score }) => (
              <SideNavMenuItem key={keyword} href={`#/${keyword.replace(/\s/g, '-')}`}>
                {`${keyword} (${meta_score.toFixed(2)})`}
              </SideNavMenuItem>
            ))}
          </SideNavMenu>
          <div style={{ height: '1rem' }} />
          <SideNavMenu title="Negative Keywords" defaultExpanded>
            {negativeKeywords.map(({ keyword, meta_score }) => (
              <SideNavMenuItem key={keyword} href={`#/${keyword.replace(/\s/g, '-')}`}>
                {`${keyword} (${meta_score.toFixed(2)})`}
              </SideNavMenuItem>
            ))}
          </SideNavMenu>
        </SideNavItems>
      </SideNav>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="IDFK" >
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Wrapper>
  )
}

function App() {
  const [ business, setBusiness ] = useState({ reviews: [] })
  const [ keywords, setKeywords ] = useState([])
  const [ header, setHeader ] = useState(['reviews', 'all'])

  useEffect(() => {
    getBusinesses()
      .then(([ _, second ] ) => second)
      .then(business => {
        getKeywords(business.business_id)
          .then(keywords => keywords.sort((a, b) => a.meta_score - b.meta_score))
          .then(setKeywords)
        return business
      })
      .then(setBusiness)
  }, [])

  return (
    <div className="App">
      <HashRouter>
        <Header keywords={keywords} header={header} />
        <div id="nav-spacer" style={{ height: 'calc(48px + 1rem)' }} />
        {business && business.business_id &&
        <div style={{
          marginLeft: '256px',
          padding: '0 1rem 0',
          width: 'calc(100% - 256px)'
        }}>
            <Route exact path="/" render={() => {
              setHeader('reviews / all')
              return <KeywordReviews bid={business.business_id} />
            }} />
            <Route path="/:kw" render={({ match }) => {
              setHeader(`keyword / ${match.params.kw.toLowerCase()}`)
              return <KeywordReviews keyword={match.params.kw} bid={business.business_id} />
            }} />
        </div>
        }
      </HashRouter>
    </div>
  );
}

export default App;
