import styled from "styled-components";

var cores = ["#363636","#2b75ff","#ff2277","#00ba47","#ffd400"]

const CoresLista = styled.li`
    background-color: ${props => {return `${cores[props.cor]}`}};
    height: 24px;
    width: 24px;
    height: ${props => { return `${props.size}` } };
    width: ${props => { return `${props.size}` } };
    border-radius: 50%;
    border-radius: ${props => { return `${props.radio}` } };
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.1s;
    &:hover{
        transform: scale(1.25);
        cursor: pointer;
    }
`

export default CoresLista