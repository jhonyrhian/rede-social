import {useState, useEffect,  useContext} from 'react'

import BasePage from "./BasePage"
import InputStyled from "../componente/InputStyled"
import InputSenhaStyled from "../componente/InputSenhaStyled"
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
            <BackgroundColor cor={[tema, cor]}>
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
                    <FormBG cor={[tema, cor]} onSubmit={trataSubmit}>
                        <div>
                            <h2>Criar conta</h2>
                        </div>
                        <InputWrapper operacao="signup">
                            <StyledDiv>
                            <label htmlFor="nome">Nome</label>
                            <InputStyled required cor={[tema, cor]} id='nome' operacao="signup" type="text" placeholder="EX: Pedro Cardoso" value={nome} onChange={(event)=>{setNome(event.target.value)}}></InputStyled>
                            <label htmlFor="username">Usuário</label>
                            <InputStyled required cor={[tema, cor]} id='username' operacao="signup" type="text" placeholder="EX: Pedriin" value={username} onChange={(event)=>{setUsername(event.target.value)}}></InputStyled>
                            </StyledDiv>
                            <StyledDiv>
                            <label htmlFor="email">Email</label>
                            <InputStyled required cor={[tema, cor]} id='email' operacao="signup" type="email" placeholder="email@mail.com" value={email} onChange={(event)=>{setEmail(event.target.value)}}></InputStyled>
                            <label htmlFor="senha">Senha</label>
                            <InputSenhaStyled required cor={[tema, cor]} id='senha' operacao="signup" placeholder="No mínimo 7 dígitos, letras e numero" value={senha} onChange={(event)=>{setSenha(event.target.value)}}></InputSenhaStyled>
                            </StyledDiv>
                        </InputWrapper>

                        <SubmitStyled type="submit" value="Criar conta"  cor={[tema, cor]} ></SubmitStyled>
                        <p>Já tem conta? <StyledLink cor={[tema, cor]} href="/">Entrar na conta</StyledLink></p>
                    </FormBG>
            </BackgroundColor>
            </BasePage>
        )
}