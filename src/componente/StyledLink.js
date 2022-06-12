import styled from "styled-components";

const StyledLink = styled.a`
    color: ${props => {return `${props.cor[0]}`}};
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