import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
//import styled from 'styled-components'
import MatchListPage from "../MatchListPage/MatchListPage";

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

const Main = (props) => {
  const [selectedPage, setSelectedPage] = useState("choose-profile");

  // console.log({ showBack });
  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "match-list":
        props.setShowBack(true);
        props.setShowTrash(true);
        return <MatchListPage showTrash={props.showTrash} />;
      default:
        props.setShowBack(false);
        props.setShowTrash(false);
        return <ChooseProfilePage showTrash={props.showTrash} />;
    }
  };

  const goToChooseProfilePage = () => {
    setSelectedPage("choose-profile");
  };

  const goToMatchListPage = () => {
    setSelectedPage("match-list");
  };

  return (
    <div>
      {/* <MainContainer> */}
      <AppBar
        showBack={props.showBack}
        goToChooseProfilePage={goToChooseProfilePage}
        goToMatchListPage={goToMatchListPage}
      />
      {renderSelectedPage()}
      {/* </MainContainer> */}
    </div>
  );
};

export default Main;
