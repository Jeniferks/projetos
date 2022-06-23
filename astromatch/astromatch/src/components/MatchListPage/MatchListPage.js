import React, { useEffect, useState } from 'react'
import MatchListItem from "./MatchListItem"
import axios from 'axios';
import styled from 'styled-components'



const ListContainer = styled.div `
  padding: 1rem;
  background-color: white;
  border-radius:5%;
  height:30rem;
  width: 23rem;
  box-shadow: 1px 1px 5px 2px black;
  position:relative;
  bottom:70px;
  display:block;
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