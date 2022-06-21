import React from 'react'
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
margin: 3rem;
border: 1px solid black;

`

const ProfilePicture = styled.img`
width:100%;
display:block;
max-height: 220px;
`

const ProfileInfo = styled.div`
border-top: 1px solid black;
padding: 0 16px;
`

const ProfileCard = (props) => {
  const profile = props.profile
  return (
    <div>
        <ProfileCardContainer>
        <ProfilePicture src={profile.photo} alt=" "/>
        <ProfileInfo>
        <p>{profile.name}, {profile.age}</p>
        <p>{profile.bio}</p>
        </ProfileInfo>
        </ProfileCardContainer>
    </div>
  )
}

export default ProfileCard