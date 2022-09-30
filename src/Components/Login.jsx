import axios from 'axios'
import React, { useRef } from 'react'
import styled from 'styled-components'


const LoginDiv = styled.div`
display:flex;
height:300px;
font-size:20px;
flex-direction: column;
align-items: center;
padding:50px 20px;
width:fit-content;
box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-webkit-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-moz-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
`
const InputDiv = styled.div`

border:1px solid;
padding:2px;
margin:10px;
border-radius:10px;
height:40px;

width:400px;
`
const LoginInput = styled.input`

outline :none;
padding:10px 20px;
font-size:15px;
border:none;
width:90%;
`
const LoginBtn = styled.button`
cursor:pointer;
border:2px solid;
border:none;
padding:10px 70px;
font-size:20px;
width:fit-content;
color:white;
background-color:purple;
border-radius:10px;

&:hover {
    color:purple; 
    border:2px solid;
    
    font-weight: bolder;
    background-color:white;
    
  }

`
const LoginHead = styled.h1`
color:purple;

`






 function Login() {

    const userName = useRef("");
    const password = useRef("");
    async function LoginHandler(){
        const res = await axios.get('https://xebia-scart.herokuapp.com/users?username='+userName.current.value);
            
        console.log(userName.current.value+" "+password.current.value);
        
        }
    return (
        
        <LoginDiv>
            <LoginHead>
            Login
            </LoginHead>
            <InputDiv>
                <LoginInput placeholder='Enter UserName..' ref={userName} />
            </InputDiv>

            <InputDiv>
                <LoginInput placeholder='Enter Password..' ref={password}/>
            </InputDiv>
            <LoginBtn onClick={LoginHandler}>
                Login
            </LoginBtn >
        </LoginDiv>
    )
}

export default Login