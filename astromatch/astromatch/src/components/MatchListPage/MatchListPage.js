import React, { useEffect, useState } from 'react'
import MatchListItem from "./MatchListItem"
import axios from 'axios';
import styled from 'styled-components'

const ListContainer = styled.div `
  padding: 1rem;
`

const MatchListPage = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jenifer-kindermann/matches")
    .then(response => {
      setMatches(response.data.matches)
    })
  }, []);
  
  return (
    <div>

      <ListContainer>
        {matches.map((profile) => {
          return <MatchListItem profile={profile}/>
        })}
      </ListContainer> 
    </div>
  )
}

export default MatchListPage