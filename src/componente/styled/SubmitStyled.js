import styled from "styled-components";


var cores =["#ffffff","#2470ff","#ff1770","#00ba47","#f2aa02"]
var coresEscuras = ["#0a0a0a","#0948db","#e80049","#068a36","#db8009"]


const SubmitStyled = styled.input.attrs({ type: "submit" })`
    background-color:  ${props => {return `${cores[props.cor]}`}};
    background-color: ${props => {if(props.tema =='0' && props.cor == '0'){return `#111`}}};
    color: ${props => {return `${(props.cor == '0')? `#111` : `#fff`}`}};
    color: ${props => {if(props.tema =='0' && props.cor == '0'){return `#fff`}}};
    border: 0px;
    border-radius: 5px;
    margin-top: 19px;
    font-size: 16px;
    padding: 18px;
    font-weight: 600;

    &:hover{
        cursor: pointer;
        background-color: ${props => {if(props.tema =='0'){return `${coresEscuras[props.cor]}`}}};
        box-shadow:${props => {if(props.tema == '1'){return ` 0 0 15px ${cores[props.cor]}90`}}};
        transition: 0.4s
    }
`;

export default SubmitStyled