import React, { useEffect, useState } from "react";
import MatchListItem from "./MatchListItem";
import axios from "axios";
import styled from "styled-components";
import ChooseButtons from "../ChooseProfilePage/ChooseButtons";

const ListContainer = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 5%;
  height: 30rem;
  width: 23rem;
  box-shadow: 1px 1px 5px 2px black;
  position: relative;
  bottom: 70px;
  display: block;
`;

const MatchListPage = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jeniferKindermann/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      });
  }, []);

  const onClickReset = async () => {
    try {
      await axios.put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jeniferKindermann/clear"
      );
      setMatches([]);
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div>
      <ListContainer>
        {matches.map((profile) => {
          return <MatchListItem profile={profile} />;
        })}
      </ListContainer>
      <ChooseButtons showTrash={props.showTrash} onClickReset={onClickReset} />
    </div>
  );
};

export default MatchListPage;
