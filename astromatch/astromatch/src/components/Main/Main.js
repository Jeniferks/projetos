import React, {  useState } from 'react'
import AppBar from '../AppBar/AppBar'
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage"
//import styled from 'styled-components'
import MatchListPage from '../MatchListPage/MatchListPage'

// const MainContainer = styled.div`
// border: 1px solid black;
// border-radius: 1rem;
// width: 400px;
// height: 32rem;
// margin:30px;
// display: flex;
// flex-direction: column;
// background-color: white;

// `

const Main = () => {
const [selectedPage, setSelectedPage] = useState("choose-profile");

const renderSelectedPage = () => {
  switch (selectedPage) {
    case "choose-profile":
      return <ChooseProfilePage/>
    case "match-list":
      return <MatchListPage/>
    default:
      return<ChooseProfilePage/>

  }
}

const goToChooseProfilePage = () => {
  setSelectedPage("choose-profile")
}

const goToMatchListPage = () => {
  setSelectedPage("match-list")
}



  return (
    <div>
      {/* <MainContainer> */}
      <AppBar goToChooseProfilePage={goToChooseProfilePage}  goToMatchListPage={goToMatchListPage}/>
      {renderSelectedPage()}
      {/* </MainContainer> */}
    </div>
  )
}

export default Main