import styled from "styled-components";

var cores = ["#363636","#2b75ff","#ff2277","#00ba47","#f2aa02"]

const StyledCheckbox = styled.label`
    /* width: 45px; */
    /* height: 25px; */
    margin: 0;
    width: 3rem;
    height: 1.55rem;
    background-color: #363636;
    border-radius: 50px;
    box-shadow: inset 0px 0px 10px #000;
    cursor: pointer;
    transition: 0.4s;
    position: relative;

    input{
        /* width: 45px; */
        /* height: 25px; */
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
        box-shadow: inset 0px 0px 6px #00000040;
    }

    span{
        /* width: 25px; */
        /* height: 25px; */
        height: 1.55em;
        width: 1.55em;
        border-radius: 50%;
        background-color: ${props => {return `${cores[props.cor]}`}};
        background-color: ${props => {if(props.tema =='0' && props.cor == '0'){return `#eee`}}};
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: 1px 0px 4px #00000040;
        transform: scale(1.1);
        transition: 0.4s;
    }

    input:checked + span{
        background-color: #363636;
        left: 50%;
    }

`

export default StyledCheckbox