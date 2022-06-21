import React from 'react'
import styled from 'styled-components';
import "./ProfileCard.css"

const ProfileCardContainer = styled.div`
background-color: white;
border-radius:5%;
height:30rem;
box-shadow: 1px 1px 5px 2px black;
position:relative;
bottom:70px;
`

const ProfilePicture = styled.img`
width:100%;
height:30rem;
display:inline;
max-height: 30rem;
border-radius:5%;
box-shadow: .5rem .6rem 3px rgba(0,0,0,0.4);
`

const ProfileInfo = styled.div`
display:flex;
flex-direction:column;
position:relative;
bottom:160px;
text-align:left;
margin-left: 1rem;
display:block;

`

const ProfileCard = (props) => {
  const profile = props.profile
  return (
    <div className='profile-card'>
        <ProfileCardContainer>
        <ProfilePicture src={profile.photo} alt=" "/>
        <ProfileInfo>
        <h2>{profile.name}, {profile.age}</h2>
        <h3>{profile.bio}</h3>
        </ProfileInfo>
        </ProfileCardContainer>
    </div>
  )
}

export default ProfileCard