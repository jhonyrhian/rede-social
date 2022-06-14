import styled from "styled-components";

var cores =["#fff","#2470ff","#ff2277","#00ba47","#f2aa02"]

const StyledLink = styled.a`
    color: ${props => {return `${cores[props.cor[1]]}`}};
    color: ${props => {if(props.cor[0] =='0' && props.cor[1] == '0'){return `#111`}}};
    text-decoration: ${props => {
        return (props.cor[2] == "neutro") ?  "underline" : "none"               
    }};

    
    &:hover{
        cursor: pointer;
        
        text-decoration: underline;
        
        text-decoration: ${props => {return (props.cor[0] == "#1b1b1b" || props.cor[0] == "#fcfcfc") ?  "none" : "underline"}};

        color: ${props => {if(props.cor[0] != "#1b1b1b"){return props.cor[1]}}};
        color: ${props => {return (props.cor[0] == "#fcfcfc" && props.cor[0])}};
    }
`

export default StyledLink