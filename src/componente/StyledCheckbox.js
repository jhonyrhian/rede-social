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
        width: 3rem;
        height: 1.55rem;
        cursor: pointer;
        appearance: none;
        /* width: 45px;
        height: 25px; */
        border-radius: 50px;
        position: absolute;
        background-color: transparent;
        transition: 0.4s;
        margin: 0;
    }
    input:checked{
        background-color: ${props => {return `${cores[props.cor]}`}};
        background-color: ${props => {if(props.tema =='1' && props.cor == '0'){return `#fff`}}};
    }

    span{
        /* width: 25px; */
        /* height: 25px; */
        height: 1.1em;
        width: 1.1em;
        border-radius: 50%;
        background-color: #eee;
        position: absolute;
        top: 14.1%;
        left: 3px;
        transform: scale(1.1);
        transition: 0.4s;
    }

    input:checked + span{
        background-color: #363636;
        left: 54%;
    }

`

export default StyledCheckbox