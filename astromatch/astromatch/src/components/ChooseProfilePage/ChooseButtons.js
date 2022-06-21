import React  from 'react';
import styled from 'styled-components';
import axios from "axios";
import { FaHeart,  FaBan, FaTrash} from 'react-icons/fa';


const ButtonsContainer = styled.div`
    display:flex;
    justify-content: space-around;
    position:relative;
    top:2.5rem;
`

const ChooseButtons = (props) => {
    const onClickReset = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jenifer-kindermann/clear")
        .then(response => {
            console.log(response)
        })
        }
    return (
    <div>
        <ButtonsContainer>
        <FaBan fontSize="27px" color="black"  onClickNo={props.onClickNo}/>
        <FaTrash fontSize="27px" color="black" onClick={onClickReset}/>
        <FaHeart fontSize="27px" color='black' onClickYes={props.onClickYes}/>
        </ButtonsContainer>
    </div>
    )
}

export default ChooseButtons