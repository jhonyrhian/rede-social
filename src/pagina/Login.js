import {useState, useEffect, useContext } from 'react'

import BasePage from "./BasePage"
import InputStyled from "../componente/styled/InputStyled"
import InputText from "../componente/InputText"
import InputSenhaStyled from "../componente/styled/InputSenhaStyled"
import SubmitStyled from "../componente/styled/SubmitStyled"
import StyledLink from "../componente/styled/StyledLink"
import CoresLista from "../componente/styled/CoresLista"
import BackgroundColor from "../componente/styled/BackgroundColor"
import InputWrapper from "../componente/styled/InputWrapper"
import FormBG from "../componente/styled/FormBG"
import ContextoTema from '../ContextoTema'
import Checkbox from "../componente/Checkbox"

import "./css/Login.css"

export default function Login(){
    const { mudaTema, tema, mudaCor, cor } = useContext(ContextoTema)
    

    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')
    // const [error, setError] = useState('0')
    var error = '1'

    function trataSubmit(event){
        
        var localnome = localStorage.getItem('nome')
        var localusername = localStorage.getItem('username')
        var localemail = localStorage.getItem('email')
        var localsenha = localStorage.getItem('senha')
        event.preventDefault();
        if(username == localusername && senha == localsenha || username == localemail && senha == localsenha){
            alert("Login bem sucedido")
        }else{
            // setError('1')
            // alert("Tudo errado")
        }

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
                        <Checkbox/>
                    </div>
                </ul>
                    <FormBG cor={cor} tema={tema} onSubmit={trataSubmit}>
                        <div>
                            <h2>Entrar</h2>
                            <p>Insira seu Email e senha para acessar</p>
                        </div>

                        <InputWrapper>
                            {/* <InputStyled status={error} cor={cor} tema={tema} type="text" placeholder="Email ou usuário" value={username} onChangeFunction={(event)=>{setUsername(event.target.value)}} ></InputStyled> */}
                            <InputText status={error} cor={cor} tema={tema} type="text" placeholder="Email ou usuário" value={username} onChangeFunction={(event)=>{setUsername(event.target.value)}} ></InputText>
                            
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