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

import "./css/Signup.css"

export default function Signup(){
    const { mudaTema } = useContext(ContextoTema)
    const { mudaCor } = useContext(ContextoTema)

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

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
                            <h2>Criar conta</h2>
                        </div>
                        <InputWrapper operacao="signup">
                            <StyledDiv>
                            <label htmlFor="nome">Nome</label>
                            <InputStyled cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} id='nome' operacao="signup" type="text" placeholder="EX: Pedro" value={nome} onChange={(event)=>{setNome(event.target.value)}}></InputStyled>
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <InputStyled cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} id='sobrenome' operacao="signup" type="text" placeholder="EX: Cardoso" value={sobrenome} onChange={(event)=>{setSobrenome(event.target.value)}}></InputStyled>
                            </StyledDiv>
                            <StyledDiv>
                            <label htmlFor="email">Email</label>
                            <InputStyled cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} id='email' operacao="signup" type="email" placeholder="email@mail.com" value={email} onChange={(event)=>{setEmail(event.target.value)}}></InputStyled>
                            <label htmlFor="senha">Senha</label>
                            <InputStyled cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} id='senha' type="password" operacao="signup" placeholder="No mínimo 7 dígitos, letras e numero" value={senha} onChange={(event)=>{setSenha(event.target.value)}}></InputStyled>
                            </StyledDiv>
                        </InputWrapper>

                        <SubmitStyled type="submit"  cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} ></SubmitStyled>
                        <p>Já tem conta? <StyledLink cor={[localStorage.getItem('tema') ,localStorage.getItem('cor')]} href="/">Entrar na conta</StyledLink></p>
                    </FormBG>
            </BackgroundColor>
            </BasePage>
        )
}