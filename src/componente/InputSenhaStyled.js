import styled from "styled-components";

var cores =["#ffffff","#2470ff","#ff2277","#00ba47","#f2aa02"]

const InputSenhaStyled = styled.input.attrs({ type: "password" })`
    color:  ${props => {return `${(props.tema == '1')? `${cores[props.cor]}`: `black`}`}};
    background-color: ${props => {return `${(props.tema == '0')? `${cores[props.cor]}20`: `transparent`}`}};
    background-color: ${props => {if(props.tema =='0' && props.cor == '0'){return `#00000020`}}};
    border: solid 1px;
    border-color: ${props => {return `${cores[props.cor]}`}};
    border-color: ${props => {if(props.tema =='0' && props.cor == '0'){return `#111111`}}};
    
    border-radius: 3px;
    
    margin: ${props => {return (props.operacao == "signup") ? `10px 30px 10px 0;` : `10px 0 10px 0`}}}
    width: ${props => {return (props.operacao == "signup") ? `275px;` : `inherit`}}}

    font-size: 16px;
    padding: 15px;
    font-size: 15px;
    transition: 0.08s;

    &::placeholder{
        color: ${props => {return `${(props.tema == '0')? `${cores[props.cor]}f1`: `${cores[props.cor]}80`}`}};
        color: ${props => {if(props.tema =='0' && props.cor == '0'){return `#11111199`}}};
    }
    &:focus{
        outline: solid red 1px;
        outline-color: ${props => {return `${cores[props.cor]}`}};
        outline-color: ${props => {if(props.tema =='0' && props.cor == '0'){return `#111111`}}};
        background-color: ${props => {if(props.tema =='0' && props.cor){return `${cores[props.cor]}40`}}};
        background-color: ${props => {if(props.tema =='0' && props.cor == '0'){return `#11111140`}}};

        -webkit-appearance: none;
        -moz-appearance: none;
    }
`;

export default InputSenhaStyled