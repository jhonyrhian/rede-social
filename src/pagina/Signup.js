import {useState, useEffect} from 'react'

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
import { useContext } from 'react'

import { BsFillMoonFill } from "react-icons/bs";

import "./css/Signup.css"

export default function Signup(){
    const { tema, mudaTema } = useContext(ContextoTema)
    const { corzinha,setCorzinha, mudaCor } = useContext(ContextoTema)


    const [index, setIndex] = useState(0)
    // const [tema, setTema] = useState(0)
    const [corTexto, setCorTexto] = useState("#000")
    // const [cor, setCor] = useState(
    //     [
    //         [
    //             {
    //                 corNome: "neutro",
    //                 principal:"#1b1b1b",
    //                 principal_light:"#bbb",
    //                 principal_dark:"#0a0a0a",
    //                 placeholderBG:"#ccc",
    //                 formBG:"#e6e6e6"
    //             },
    //             {
    //                 principal:"#2470ff",
    //                 principal_light:"#aabde3",
    //                 principal_dark:"#2159c2",
    //                 placeholderBG:"#c7d0f0",
    //                 placeholderCor:"#6d7d9c",
    //                 formBG: "#d4ddff"
    //             },
    //             {
    //                 principal:"#ff2277",
    //                 principal_light:"#f0a8c9",
    //                 principal_dark:"#d92368",
    //                 placeholderBG:"#f0c7d6",
    //                 placeholderCor:"#b05b7b",
    //                 formBG: "#ffd4ee"
    //             },
    //             {
    //                 principal:"#00ba47",
    //                 principal_light:"#9adb9b",
    //                 principal_dark:"#1a964c",
    //                 placeholderBG:"#c7f0c9",
    //                 placeholderCor:"#5a965d",
    //                 formBG: "#d4ffda"
                    
    //             },
    //             {
    //                 principal:"#f2aa02",
    //                 principal_light:"#ebe0a2",
    //                 principal_dark:"#db8009",
    //                 placeholderBG:"#f2f2b1",
    //                 placeholderCor:"#ad9431",
    //                 formBG: "#ffffd9"
    //             }
    //         ],
    //         [
    //             {
    //                 corNome: "neutro",
    //                 principal:"#fcfcfc",
    //                 principal_light:"#0d0d0d",
    //                 principal_dark:"#0a0a0a",
    //                 placeholderBG:"transparent",
    //                 formBG: "#1f1f1f"
    //             },
    //             {
    //                 principal:"#2470ff",
    //                 principal_light:"#06081c",
    //                 principal_dark:"#2470ff",
    //                 placeholderBG:"transparent",
    //                 placeholderCor:"#6d7d9c",
    //                 formBG:"#14183d",
    //             },
    //             {
    //                 principal:"#ff2277",
    //                 principal_light:"#170b11",
    //                 principal_dark:"#ff2277",
    //                 placeholderBG:"transparent",
    //                 placeholderCor:"#b05b7b",
    //                 formBG:"#381723",
    //             },
    //             {
    //                 principal:"#00ba47",
    //                 principal_light:"#0d1710",
    //                 principal_dark:"#00ba47",
    //                 placeholderBG:"transparent",
    //                 placeholderCor:"#5a965d",
    //                 formBG:"#12301a",
                    
    //             },
    //             {
    //                 principal:"#f2aa02",
    //                 principal_light:"#1a1306",
    //                 principal_dark:"#f2aa02",
    //                 placeholderBG:"transparent",
    //                 placeholderCor:"#ad9431",
    //                 formBG:"#2e1f0f",
    //             }
    //         ]
    //     ])

   

        
    function mudaCorTema(index){
        setIndex(index)
    }
    // function mudaTema(){
    //     tema == 0 ? setCorTexto('#fff') : setCorTexto('#000')

    //     tema == 0 ? setTema(1) : setTema(0)

    //     console.log(tema)
    // }

        return(
            <BasePage>
            <BackgroundColor>
                <ul>
                    <div>
                    <CoresLista onClick={()=>{mudaCorTema("0")}} cor="#363636"/>
                    <CoresLista onClick={()=>{mudaCorTema("1")}} cor="#2b75ff"/>
                    <CoresLista onClick={()=>{mudaCorTema("2")}} cor="#ff2277"/>
                    <CoresLista onClick={()=>{mudaCorTema("3")}} cor="#00ba47"/>
                    <CoresLista onClick={()=>{mudaCorTema("4")}} cor="#ffd400"/>
                    </div>
                    <div>
                        <CoresLista size="40px" radio="25%" cor="black" onClick={()=>{mudaTema()}} ><BsFillMoonFill color={"white"}/></CoresLista>
                    </div>
                </ul>
                    <FormBG>
                        <div>
                            <h2>Criar conta</h2>
                        </div>

                        <InputWrapper operacao="signup">
                            <StyledDiv>
                            <label for="name">Nome</label>
                            <InputStyled operacao="signup" type="text" name="username" placeholder="Pedro"></InputStyled>
                            <label for="name">Sobrenome</label>
                            <InputStyled operacao="signup" type="text" name="username" placeholder="Cardoso"></InputStyled>
                            </StyledDiv>
                            <StyledDiv>
                            <label for="name">Email</label>
                            <InputStyled operacao="signup" type="email" placeholder="email@mail.com"></InputStyled>
                            <label for="name">Senha</label>
                            <InputStyled operacao="signup" type="password" placeholder="No mínimo 7 dígitos, letras e numero"></InputStyled>
                            </StyledDiv>
                        </InputWrapper>

                        <SubmitStyled type="submit"></SubmitStyled>
                        <p>Já tem conta? <StyledLink href="/">Entrar na conta</StyledLink></p>
                    </FormBG>
            </BackgroundColor>
            </BasePage>
        )
}