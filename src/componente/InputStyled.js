import styled from "styled-components";

const InputStyled = styled.input.attrs({ type: "text" })`
    background-color: ${props => {return `${props.cor[1]}`}};
    border: solid 1px;
    border-color: ${props => {return `${props.cor[0]}`}};-
    border-radius: 3px;
    /* margin-top: 10px;
    margin-bottom: 10px; */

    /* margin: 10px 30px 10px 0; */
    
    margin: ${props => {return (props.operacao == "signup") ? `10px 30px 10px 0;` : `10px 0 10px 0`}}}
    width: ${props => {return (props.operacao == "signup") ? `275px;` : `inherit`}}}

    /* margin: ${props => {if(props.login == "true"){return `10px 0 10px 0`}else{return `10px 30px 10px 0`}}} */
    /* border-color: ${props => {if(props.login == "true"){return `red`}else{return `green`}}} */

    font-size: 16px;
    padding: 15px;
    font-size: 15px;
    transition: all 0.17s;

    &::placeholder{
        color: ${props => {return `${props.cor[2]}`}};
    }
    &:focus{
        outline: ${props => {return `${props.cor[0]} solid 2.5px`}};
        border-color: transparent;
        background-color: ${props => {return `${props.cor[0]}20`}};
    }
`;

export default InputStyled