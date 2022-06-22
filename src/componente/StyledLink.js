import styled from "styled-components";

var cores =["#ffffff","#2470ff","#ff1770","#00ba47","#f2aa02"]
var coresEscuras = ["#0a0a0a","#0948db","#e80049","#068a36","#db8009"]

const StyledLink = styled.a`
    color: ${props => {return `${cores[props.cor]}`}};
    color: ${props => {if(props.tema =='0' && props.cor == '0'){return `#111`}}};
    text-decoration: ${props => {
        return (props.cor == "0") ?  "underline" : "none"}};

    
    &:hover{
        cursor: pointer;
        
        text-decoration: ${props => {
            return (props.cor == "0") ?  "none" : "underline"}};

        color: ${props => {if(props.tema == "0"){return `${coresEscuras[props.cor]}`}}};
        
    }
`

export default StyledLink