import React  from 'react';
import styled from 'styled-components';



const ButtonsContainer = styled.div`
    display:flex;
    justify-content: space-around;
    position:relative;
    bottom:35px;
`

const ChooseButtons = (props) => {
    
    return (
    <div>
        <ButtonsContainer>
        <button onClickNo={props.onClickNo}>Não</button>
        <button onClickYes={props.onClickYes}>Sim</button>
        </ButtonsContainer>
    </div>
    )
}

export default ChooseButtons