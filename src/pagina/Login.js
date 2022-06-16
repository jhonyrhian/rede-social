import {useState, useEffect, useContext } from 'react'

import BasePage from "./BasePage"
import InputStyled from "../componente/InputStyled"
import SubmitStyled from "../componente/SubmitStyled"
import StyledLink from "../componente/StyledLink"
import CoresLista from "../componente/CoresLista"
import BackgroundColor from "../componente/BackgroundColor"
import InputWrapper from "../componente/InputWrapper"
import FormBG from "../componente/FormBG"
import ContextoTema from '../ContextoTema'

import { BsFillMoonFill } from "react-icons/bs";

import "./css/Login.css"

export default function Login(){
    // const { mudaTema } = useContext(ContextoTema)
    const { mudaTema } = useContext(ContextoTema)
    const { mudaCor } = useContext(ContextoTema)
    // const { cor, mudaCor } = useContext(ContextoTema)


        return(
            <BasePage>
            <BackgroundColor cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]}>
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
                    <FormBG cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} onSubmit={(event)=>{event.preventDefault();}}>
                        <div>
                            <h2>Entrar</h2>
                            <p>Insira seu Email e senha para acessar</p>
                        </div>

                        <InputWrapper>
                            <InputStyled cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} type="text" placeholder="Email ou usuário"></InputStyled>
                            <InputStyled cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} type="password" placeholder="Senha"></InputStyled>
                            <StyledLink cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} href="https://www.google.com">Esqueci a senha</StyledLink>
                        </InputWrapper>

                        <SubmitStyled type="submit"  cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} ></SubmitStyled>
                        <p>Não tem conta? <StyledLink cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} href="/signup">Crie uma conta agora</StyledLink></p>
                    </FormBG>
            </BackgroundColor>
            </BasePage>
        )
}