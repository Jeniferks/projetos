import React from "react";
import styled from "styled-components";
import "./Appbar.css";
import { FaComment, FaUser } from "react-icons/fa";

const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 1rem;
`;

const AppBar = (props) => {
  return (
    <div className="App-Bar-Content">
      <h1>Astromatch</h1>
      <AppBarContainer>
        {props.showBack && (
          <FaUser
            fontSize="27px"
            color="black"
            onClick={props.goToChooseProfilePage}
          />
        )}
        <img
          className="header-logo"
          src="https://br.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png"
          alt="Logo tinder"
        />
        <FaComment
          fontSize="27px"
          color="black"
          onClick={props.goToMatchListPage}
        />
      </AppBarContainer>
    </div>
  );
};

export default AppBar;
