import {useContext} from 'react'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import StyledCheckbox from './styled/StyledCheckbox'
import ContextoTema from '../ContextoTema'

export default function Checkbox(props){
    const {mudaTema, tema, cor} = useContext(ContextoTema)
    if(tema == '1'){
        return(
            <StyledCheckbox cor={cor} tema={tema} onChange={()=>{mudaTema()}}>
                <input checked type="checkbox"/>
                <span/>
                <BsFillMoonFill className="moonIcon"/>
                <BsFillSunFill className="sunIcon"/>
            </StyledCheckbox>
        )
    }else{
        return(
            <StyledCheckbox cor={cor} tema={tema} onChange={()=>{mudaTema()}}>
                <input type="checkbox"/>
                <span/>
                <BsFillSunFill className="sunIcon"/>
                <BsFillMoonFill className="moonIcon"/>
            </StyledCheckbox>
        )
    }
}