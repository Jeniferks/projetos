import React from "react";
import styled from "styled-components";
import { FaHeart, FaBan, FaTrash } from "react-icons/fa";

const ChooseButtons = ({ onClickNo, onClickReset, onClickYes, showTrash }) => {
  const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    top: ${showTrash ? "-2.5rem" : "2.5rem"};
  `;
  return (
    <div>
      <ButtonsContainer>
        {showTrash ? (
          <FaTrash fontSize="27px" color="black" onClick={onClickReset} />
        ) : (
          <>
            <FaBan fontSize="27px" color="black" onClick={onClickNo} />
            <FaHeart fontSize="27px" color="black" onClick={onClickYes} />
          </>
        )}
      </ButtonsContainer>
    </div>
  );
};

export default ChooseButtons;
