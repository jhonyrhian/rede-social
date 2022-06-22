import styled from "styled-components";

var cores =[["#e6e6e6","#d4ddff","#ffd4ee","#d4ffda","#ffffd9"],["#171717","#111111","#111111","#111111","#111111",]]


const BackgroundColor = styled.form`
    background-color:  ${props => {return `${cores[props.tema][props.cor]}`}};
`

export default BackgroundColor