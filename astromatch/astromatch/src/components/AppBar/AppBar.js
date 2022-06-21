import React from 'react'
import styled from 'styled-components'

const AppBarContainer = styled.div`
display:flex;
justify-content: space-between;
border-bottom: 1px solid lightgray;
align-items: center;
padding: 0 10px;
`

const AppBar = (props) => {
  return (
    <div>
      <AppBarContainer>
      <button onClick={props.goToChooseProfilePage}> Escolher</button>
      <p>Astromatch</p>
      <button onClick={props.goToMatchListPage}>Matches</button>
      </AppBarContainer>
    </div>
  )
}

export default AppBar