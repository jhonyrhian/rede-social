import {useState, useEffect,  useContext} from 'react'

import BasePage from "./BasePage"
import InputStyled from "../componente/InputStyled"
import InputSenhaStyled from "../componente/InputSenhaStyled"
import StyledDiv from "../componente/StyledDiv"
import SubmitStyled from "../componente/SubmitStyled"
import StyledLink from "../componente/StyledLink"
import StyledCheckbox from "../componente/StyledCheckbox"
import CoresLista from "../componente/CoresLista"
import BackgroundColor from "../componente/BackgroundColor"
import InputWrapper from "../componente/InputWrapper"
import FormBG from "../componente/FormBG"
import ContextoTema from '../ContextoTema'

import { BsFillMoonFill } from "react-icons/bs";

import "./css/Signup.css"

export default function Signup(){
    const { mudaTema, tema } = useContext(ContextoTema)
    const { mudaCor, cor } = useContext(ContextoTema)

    const [nome, setNome] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function trataSubmit(event){
        event.preventDefault()
        localStorage.setItem('nome', nome)
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
        localStorage.setItem('senha', senha)
        alert(localStorage.getItem('senha'))
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
                            <h2>Criar conta</h2>
                        </div>
                        <InputWrapper operacao="signup">
                            <StyledDiv>
                            <label htmlFor="nome">Nome</label>
                            <InputStyled required cor={cor} tema={tema} id='nome' operacao="signup" type="text" placeholder="EX: Pedro Cardoso" value={nome} onChange={(event)=>{setNome(event.target.value)}}></InputStyled>
                            <label htmlFor="username">Usuário</label>
                            <InputStyled required cor={cor} tema={tema} id='username' operacao="signup" type="text" placeholder="EX: Pedriin" value={username} onChange={(event)=>{setUsername(event.target.value)}}></InputStyled>
                            </StyledDiv>
                            <StyledDiv>
                            <label htmlFor="email">Email</label>
                            <InputStyled required cor={cor} tema={tema} id='email' operacao="signup" type="email" placeholder="email@mail.com" value={email} onChange={(event)=>{setEmail(event.target.value)}}></InputStyled>
                            <label htmlFor="senha">Senha</label>
                            <InputSenhaStyled required cor={cor} tema={tema} id='senha' operacao="signup" placeholder="No mínimo 7 dígitos, letras e numero" value={senha} onChange={(event)=>{setSenha(event.target.value)}}></InputSenhaStyled>
                            </StyledDiv>
                        </InputWrapper>

                        <SubmitStyled type="submit" value="Criar conta"  cor={cor} tema={tema} ></SubmitStyled>
                        <p>Já tem conta? <StyledLink cor={cor} tema={tema} href="/">Entrar na conta</StyledLink></p>
                    </FormBG>
            </BackgroundColor>
            </BasePage>
        )
}