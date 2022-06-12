import styled from "styled-components";

var cores =[["#e6e6e6","#d4ddff","#ffd4ee","#d4ffda","#ffffd9"],['green', 'yellow']]

const BackgroundColor = styled.form`
    /* background-color:  ${props => {return `${props.cor}`}}; */
    background-color:  ${props => {return `${cores[0][props.cor[0]]}`}};
    /* background-color:  ${props => {return `blue`}}; */
`

export default BackgroundColor