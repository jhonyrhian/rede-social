import styled from "styled-components";

var cores = ["#363636","#2b75ff","#ff2277","#00ba47","#f2aa02"]

const StyledCheckbox = styled.label`
    
    margin: 0;
    width: 3rem;
    height: 1.55rem;
    background-color: ${props => {return `${cores[props.cor]}`}};
    border-radius: 50px;
    cursor: pointer;
    transition: 0.4s;
    position: relative;

    input{
        margin: 0;
        width: 3rem;
        height: 1.55rem;
        cursor: pointer;
        appearance: none;
        border-radius: 50px;
        position: absolute;
        background-color: transparent;
        transition: 0.4s;
        margin: 0;
    }
    input:checked{
        background-color: ${props => {if(props.tema =='1' && props.cor == '0'){return `#fff`}}};
    }

    span{
        z-index: 1;
        height: 1.1em;
        width: 1.1em;
        border-radius: 50%;
        background-color: #eee;
        position: absolute;
        top: 14.1%;
        left: 3px;
        transform: scale(1.1);
        transition: 0.43s;
    }

    input:checked + span{
        background-color: #363636;
        left: 54%;
    }

    .sunIcon, .moonIcon{
        position: absolute;
        top: 14.2%;
        
    }

    .sunIcon{
        left: 4px;
        color: #fff;
        animation: ${props => {if(props.tema =='0'){return `bounceOut 0.3s`}}};
        animation: ${props => {if(props.tema =='1'){return `bounceOut 0.45s reverse`}}};
    }
    
    .moonIcon{
        right: 4px;
        color: #363636;
        animation: ${props => {if(props.tema =='1'){return `bounceOut 0.3s`}}};
        animation: ${props => {if(props.tema =='0'){return `bounceOut 0.45s reverse`}}};
    }

    @keyframes bounceOut {
    30%  {transform: scale(1.2;)}
    50%  {transform: scale(1.3)}
    100% {transform: scale(0)}
    }

`

export default StyledCheckbox