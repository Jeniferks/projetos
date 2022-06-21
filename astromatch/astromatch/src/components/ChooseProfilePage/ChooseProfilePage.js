import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ChooseButtons from './ChooseButtons'
import ProfileCard from "./ProfileCard"


const ChooseProfilePage = () => {
  const [profileToChoose, setProfileToChoose] = useState(undefined)
  const getProfileToChoose = () => {
    axios.get(" https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jenifer-kindermann/person")
    .then(response => {
      setProfileToChoose(response.data.profile)
    })
  }  

  const chooseProfile = (choice) => {
    const body = {
      id: profileToChoose.id,
      choice: choice
      
  }
  setProfileToChoose(undefined)
  axios
  .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jenifer-kindermann/choose-person", body)
  .then(response => {
    console.log(response)
    getProfileToChoose()
  });
  }

    useEffect(() => {
    getProfileToChoose()
    }, []);

    

  

  return (
    <div>
      {profileToChoose ?
      (<>
        <ProfileCard profile={profileToChoose}/>
        <ChooseButtons onClickNo ={() => chooseProfile(false)} onClickYes ={() => chooseProfile(true)}/>
      </>) : <p>Carregando...</p>
      }  
      
    </div>
  )
}

export default ChooseProfilePage