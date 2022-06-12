import styled from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    flex-direction: ${props =>{return(props.operacao == "signup") ? `column` : `column` }}}
    margin-top: 20px;
    margin-bottom: 10px;
    
`

export default InputWrapper