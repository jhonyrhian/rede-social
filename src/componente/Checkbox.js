import {useContext} from 'react'
import StyledCheckbox from './StyledCheckbox'
import ContextoTema from '../ContextoTema'

export default function Checkbox(props){
    const {mudaTema, tema, cor} = useContext(ContextoTema)
    if(tema == '1'){
        return(
            <StyledCheckbox cor={cor} tema={tema} onChange={()=>{mudaTema()}}>
                <input checked type="checkbox"/>
                <span/>
            </StyledCheckbox>
        )
    }else{
        return(
            <StyledCheckbox cor={cor} tema={tema} onChange={()=>{mudaTema()}}>
                <input type="checkbox"/>
                <span/>
            </StyledCheckbox>
        )
    }
}