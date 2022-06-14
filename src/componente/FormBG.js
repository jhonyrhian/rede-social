import styled from "styled-components";

var cores =[["#e6e6e6","#d4ddff","#ffd4ee","#d4ffda","#ffffd9"],["#171717","#171717","#171717","#171717","#171717",]]


const BackgroundColor = styled.form`
    background-color:  ${props => {return `${cores[props.cor[0]][props.cor[1]]}`}};
`

export default BackgroundColor