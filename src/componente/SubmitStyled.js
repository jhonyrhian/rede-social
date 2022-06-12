import styled from "styled-components";

const SubmitStyled = styled.input.attrs({ type: "submit" })`
    background-color: ${props => {return `${props.cor[0]}`}};
    background-color: ${props => {if(props.cor[0] == "#fcfcfc"){return `${props.cor[1]}`}}};
    color: #fff;
    border: 0px;
    border-radius: 5px;
    margin-top: 19px;
    font-size: 16px;
    padding: 18px;
    font-weight: 600;

    &:hover{
        cursor: pointer;
        background-color: ${props => {return props.cor[1]}};
        box-shadow:${props => {if(props.cor[0] == "#fcfcfc"||props.cor[1] == "#2470ff" ||props.cor[1] == "#ff2277" ||props.cor[1] == "#00ba47" ||props.cor[1] == "#f2aa02"){return ` 0 0 15px ${props.cor[0]}`}}};
        transition: 0.4s
    }
`;

export default SubmitStyled