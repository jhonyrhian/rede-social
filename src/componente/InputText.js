import InputStyled from "./styled/InputStyled";
import MensagemStyled from "./styled/MensagemStyled";

function InputText(props){
    // var error = '1'
    return(
    <>
    <InputStyled status={props.error} cor={props.cor} tema={props.tema} type="text" placeholder="Email ou usuário" value={props.username} onChange={props.onChangeFunction} ></InputStyled>
    {props.error== '1' && <MensagemStyled>Eita menó</MensagemStyled>}
    </>
    )
}

export default InputText