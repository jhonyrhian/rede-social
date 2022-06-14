import styled from "styled-components";

var cores =["#ffffff","#2470ff","#ff2277","#00ba47","#f2aa02"]

const InputStyled = styled.input.attrs({ type: "text" })`
    background-color: ${props => {return `${(props.cor[0] == '0')? `${cores[props.cor[1]]}20`: `transparent`}`}};
    background-color: ${props => {if(props.cor[0] =='0' && props.cor[1] == '0'){return `#00000020`}}};
    border: solid 1px;
    border-color: ${props => {return `${cores[props.cor[1]]}`}};
    border-color: ${props => {if(props.cor[0] =='0' && props.cor[1] == '0'){return `#111`}}};
    
    border-radius: 3px;
    
    margin: ${props => {return (props.operacao == "signup") ? `10px 30px 10px 0;` : `10px 0 10px 0`}}}
    width: ${props => {return (props.operacao == "signup") ? `275px;` : `inherit`}}}

    font-size: 16px;
    padding: 15px;
    font-size: 15px;
    transition: all 0.17s;

    &::placeholder{
        /* color: ${props => {return `${cores[props.cor[1]]}90`}}; */
        color: ${props => {return `${(props.cor[0] == '0')? `${cores[props.cor[1]]}`: `${cores[props.cor[1]]}80`}`}};
        color: ${props => {if(props.cor[0] =='0' && props.cor[1] == '0'){return `#111`}}};
    }
    &:focus{
        outline: ${props => {return `${props.cor[0]} solid 2.5px`}};
        border-color: transparent;
        background-color: ${props => {return `${props.cor[0]}20`}};
    }
`;

export default InputStyled