import styled from "styled-components";

var cores =[["#bbb","#aabde3","#f0a8c9","#9adb9b","#ebe0a2"],["#0d0d0d","#06081c","#170b11","#0d1710","#1a1306"]]



const BackgroundColor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  ${props => {return `${cores[props.cor[0]][props.cor[1]]}`}};
    color: ${props => {return `${(props.cor[0] == '0')? `#111` : `#fff`}`}};
    height: 100vh;
`

export default BackgroundColor