import {useState, useEffect} from 'react'

import BasePage from "./BasePage"
import InputStyled from "../componente/InputStyled"
import SubmitStyled from "../componente/SubmitStyled"
import StyledLink from "../componente/StyledLink"
import CoresLista from "../componente/CoresLista"
import BackgroundColor from "../componente/BackgroundColor"
import InputWrapper from "../componente/InputWrapper"
import FormBG from "../componente/FormBG"
import ContextoTema from '../ContextoTema'
import { useContext } from 'react'

import { BsFillMoonFill } from "react-icons/bs";

import "./css/Login.css"

export default function Login(){
    const { tema, mudaTema } = useContext(ContextoTema)
    const { corzinha, mudaCor } = useContext(ContextoTema)


    const [index, setIndex] = useState(0)
    // const [tema, setTema] = useState(0)
    const [corTexto, setCorTexto] = useState("#000")
    const [cor, setCor] = useState(
        [
            [
                {
                    corNome: "neutro",
                    principal:"#1b1b1b",
                    principal_light:"#bbb",
                    principal_dark:"#0a0a0a",
                    placeholderBG:"#ccc",
                    formBG:"#e6e6e6"
                },
                {
                    principal:"#2470ff",
                    principal_light:"#aabde3",
                    principal_dark:"#2159c2",
                    placeholderBG:"#c7d0f0",
                    placeholderCor:"#6d7d9c",
                    formBG: "#d4ddff"
                },
                {
                    principal:"#ff2277",
                    principal_light:"#f0a8c9",
                    principal_dark:"#d92368",
                    placeholderBG:"#f0c7d6",
                    placeholderCor:"#b05b7b",
                    formBG: "#ffd4ee"
                },
                {
                    principal:"#00ba47",
                    principal_light:"#9adb9b",
                    principal_dark:"#1a964c",
                    placeholderBG:"#c7f0c9",
                    placeholderCor:"#5a965d",
                    formBG: "#d4ffda"
                    
                },
                {
                    principal:"#f2aa02",
                    principal_light:"#ebe0a2",
                    principal_dark:"#db8009",
                    placeholderBG:"#f2f2b1",
                    placeholderCor:"#ad9431",
                    formBG: "#ffffd9"
                }
            ],
            [
                {
                    corNome: "neutro",
                    principal:"#fcfcfc",
                    principal_light:"#0d0d0d",
                    principal_dark:"#0a0a0a",
                    placeholderBG:"transparent",
                    formBG: "#171717"
                },
                {
                    principal:"#2470ff",
                    principal_light:"#06081c",
                    principal_dark:"#2470ff",
                    placeholderBG:"transparent",
                    placeholderCor:"#6d7d9c",
                    formBG:"#171717",
                },
                {
                    principal:"#ff2277",
                    principal_light:"#170b11",
                    principal_dark:"#ff2277",
                    placeholderBG:"transparent",
                    placeholderCor:"#b05b7b",
                    formBG:"#171717",
                },
                {
                    principal:"#00ba47",
                    principal_light:"#0d1710",
                    principal_dark:"#00ba47",
                    placeholderBG:"transparent",
                    placeholderCor:"#5a965d",
                    formBG:"#171717",
                    
                },
                {
                    principal:"#f2aa02",
                    principal_light:"#1a1306",
                    principal_dark:"#f2aa02",
                    placeholderBG:"transparent",
                    placeholderCor:"#ad9431",
                    formBG:"#171717",
                }
            ]
        ])

    
        
    function mudaCorTema(index){
        setIndex(index)
    }
    // function mudaTema(){

    //     tema == 0 ? setTema(1) : setTema(0)
    //     tema == 0 ? setCorTexto('#fff') : setCorTexto('#000')

    //     console.log(tema)
    // }

        return(
            <BasePage>
            {/* <BackgroundColor cor={[cor[tema][index].principal_light, corTexto]}> */}
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
                    <FormBG cor={[cor[tema][index].formBG]} onSubmit={(event)=>{event.preventDefault();}}>
                        <div>
                            <h2>Entrar</h2>
                            <p>Insira seu Email e senha para acessar</p>
                        </div>

                        <InputWrapper>
                            <InputStyled cor={[cor[tema][index].principal, cor[tema][index].placeholderBG, cor[tema][index].placeholderCor]} type="text" placeholder="Email"></InputStyled>
                            <InputStyled cor={[cor[tema][index].principal, cor[tema][index].placeholderBG, cor[tema][index].placeholderCor]} type="password" placeholder="Senha"></InputStyled>
                            <StyledLink cor={[cor[tema][index].principal, cor[tema][index].principal_dark, cor[tema][index].corNome]} href="https://www.google.com">Esqueci a senha</StyledLink>
                        </InputWrapper>

                        <SubmitStyled type="submit" cor={[cor[tema][index].principal, cor[tema][index].principal_dark]}></SubmitStyled>
                        <p>Não tem conta? <StyledLink cor={[cor[tema][index].principal, cor[tema][index].principal_dark, cor[tema][index].corNome]} href="/signup">Crie uma conta agora</StyledLink></p>
                    </FormBG>
            </BackgroundColor>
            </BasePage>
        )
}