import {useState, useEffect,  useContext} from 'react'

import BasePage from "./BasePage"
import InputStyled from "../componente/InputStyled"
import StyledDiv from "../componente/StyledDiv"
import SubmitStyled from "../componente/SubmitStyled"
import StyledLink from "../componente/StyledLink"
import CoresLista from "../componente/CoresLista"
import BackgroundColor from "../componente/BackgroundColor"
import InputWrapper from "../componente/InputWrapper"
import FormBG from "../componente/FormBG"
import ContextoTema from '../ContextoTema'

import { BsFillMoonFill } from "react-icons/bs";

export default function Sigin(){
    const { tema, mudaTema } = useContext(ContextoTema)
    const { corzinha,setCorzinha, mudaCor } = useContext(ContextoTema)
    return(
        <BasePage>
            <BackgroundColor cor={[tema ,corzinha]}>
            <ul>
                    <div>
                    <CoresLista onClick={()=>{mudaCor("0")}} cor="#363636"/>
                    <CoresLista onClick={()=>{mudaCor("1")}} cor="#2b75ff"/>
                    <CoresLista onClick={()=>{mudaCor("2")}} cor="#ff2277"/>
                    <CoresLista onClick={()=>{mudaCor("3")}} cor="#00ba47"/>
                    <CoresLista onClick={()=>{mudaCor("4")}} cor="#ffd400"/>
                    </div>
                    <div>
                        <CoresLista size="40px" radio="25%" cor="black" onClick={()=>{mudaTema()}} ><BsFillMoonFill color={"white"}/></CoresLista>
                    </div>
                </ul>
                <FormBG cor={[tema ,corzinha]} onSubmit={(event)=>{event.preventDefault();}}>
                    <div>
                        <h2>Criar conta</h2>
                    </div>

                    <InputWrapper operacao="signup">
                         <StyledDiv>
                            <label for="name">Nome</label>
                            <InputStyled cor={[tema ,corzinha]} operacao="signup" type="text" name="username" placeholder="Pedro"></InputStyled>
                            <label for="name">Sobrenome</label>
                            <InputStyled cor={[tema ,corzinha]} operacao="signup" type="text" name="username" placeholder="Cardoso"></InputStyled>
                        </StyledDiv>
                        <StyledDiv>
                            <label for="name">Nome</label>
                            <InputStyled cor={[tema ,corzinha]} operacao="signup" type="text" name="username" placeholder="Pedro"></InputStyled>
                            <label for="name">Sobrenome</label>
                            <InputStyled cor={[tema ,corzinha]} operacao="signup" type="text" name="username" placeholder="Cardoso"></InputStyled>
                        </StyledDiv>
                    </InputWrapper>
                    <SubmitStyled type="submit"  cor={[tema ,corzinha]} ></SubmitStyled>
                    <p>Já tem conta? <StyledLink cor={[tema ,corzinha]} href="/">Entrar na conta</StyledLink></p>
                </FormBG>
            </BackgroundColor>
        </BasePage>
    )
}