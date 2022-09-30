import axios from 'axios';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../Images/Scart-logo-white.png'


const HeadDiv = styled.div`

display:flex;
background-color:purple;
align-items:center;
justify-content: center;
height:10vh;
width:100vw;
box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-webkit-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-moz-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
z-index:100;
position: fixed;
`;
const LogoDiv = styled.div`{

  flex:1;

  
  `;
const MiddleDiv = styled.div`

flex:4;
display:flex;
justify-content: center;

`;
const SearchDiv = styled.div`
padding:2px;
margin:10px;
border-radius:20px;
width:400px;
background-color:white;

`;
const SearchInput = styled.input`
border:1px solid;
outline :none;
padding:10px;
border:none;
width:90%;

`
const UserDiv = styled.div`
flex:1;
`;
const LogoImg = styled.img`

`;

function Header(props) {
  const searchValue = useRef("");
  useEffect(() => {
    console.log(searchValue);

  }, [searchValue]);
  async function searchHandler(e) {
    if (e.key == "Enter") {
      const data = await axios.get('https://xebia-scart.herokuapp.com/products?title=' + e.target.value);
      props.setproductData(data.data);

    }


  }


  return (
    <HeadDiv>

      <LogoDiv>
        <LogoImg src={Logo} />
      </LogoDiv>
      <MiddleDiv>
        <SearchDiv>

          <SearchInput placeholder='Search...' onKeyPress={searchHandler} ref={searchValue} />
        </SearchDiv>


      </MiddleDiv>

      <UserDiv></UserDiv>
    </HeadDiv>
  )
}

export default Header