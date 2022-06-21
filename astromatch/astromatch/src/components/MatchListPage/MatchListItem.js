import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid gray;
:hover {
  background-color: pink;
}
`
const Avatar = styled.img`
  border-radius: 50%;
  margin-right: .8rem;
  height:50px;
  width:50px;
`
const MatchListItem = (props) => {
  const profile = props.profile

  return (
    <div>
      <ListItemContainer>
        <Avatar src={profile.photo} alt = ""/>
        <p>{profile.name}</p>
        </ListItemContainer>  
    </div>
  )
}

export default MatchListItem