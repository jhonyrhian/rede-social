import {useState, useEffect, useContext } from 'react'

import BasePage from "./BasePage"
import InputStyled from "../componente/InputStyled"
import InputSenhaStyled from "../componente/InputSenhaStyled"
import SubmitStyled from "../componente/SubmitStyled"
import StyledLink from "../componente/StyledLink"
import StyledCheckbox from "../componente/StyledCheckbox"
import CoresLista from "../componente/CoresLista"
import BackgroundColor from "../componente/BackgroundColor"
import InputWrapper from "../componente/InputWrapper"
import FormBG from "../componente/FormBG"
import ContextoTema from '../ContextoTema'

import { BsFillMoonFill } from "react-icons/bs";

import "./css/Login.css"

export default function Login(){
    const { mudaTema, tema } = useContext(ContextoTema)
    const { mudaCor, cor } = useContext(ContextoTema)

    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')

    function trataSubmit(event){
        event.preventDefault();
    }


        return(
            <BasePage>
            <BackgroundColor cor={cor} tema={tema}>
                <ul>
                    <div>
                    <CoresLista onClick={()=>{mudaCor("0")}} cor={0}/>
                    <CoresLista onClick={()=>{mudaCor("1")}} cor={1}/>
                    <CoresLista onClick={()=>{mudaCor("2")}} cor={2}/>
                    <CoresLista onClick={()=>{mudaCor("3")}} cor={3}/>
                    <CoresLista onClick={()=>{mudaCor("4")}} cor={4}/>
                    </div>
                    <div>
                        <StyledCheckbox cor={cor} tema={tema} onChange={()=>{mudaTema()}}>
                        <input type="checkbox"/>
                        <span/>
                        </StyledCheckbox>
                    </div>
                </ul>
                    <FormBG cor={cor} tema={tema} onSubmit={trataSubmit}>
                        <div>
                            <h2>Entrar</h2>
                            <p>Insira seu Email e senha para acessar</p>
                        </div>

                        <InputWrapper>
                            <InputStyled cor={cor} tema={tema} type="text" placeholder="Email ou usuário" value={username} onChange={(event)=>{setUsername(event.target.value)}} ></InputStyled>
                            <InputSenhaStyled placeholder="Senha" cor={cor} tema={tema} value={senha} onChange={(event)=>{setSenha(event.target.value)}} ></InputSenhaStyled>
                            <StyledLink cor={cor} tema={tema} href="https://www.google.com">Esqueci a senha</StyledLink>
                        </InputWrapper>

                        <SubmitStyled type="submit" value="Entrar" cor={cor} tema={tema} ></SubmitStyled>
                        <p>Não tem conta? <StyledLink cor={cor} tema={tema} href="/signup">Crie uma conta agora</StyledLink></p>
                    </FormBG>
            </BackgroundColor>
            </BasePage>
        )
}