import React, { useState } from 'react'
import Header from './Header'
import styled from 'styled-components'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import axios from 'axios'
import { useEffect } from 'react'
function Home() {
const [productData, setproductData] = useState([]);
const [filterData, setfilterData] = useState([]);
  useEffect(() => {
    fetchProduct();
  
  }, [])   
  async function  fetchProduct(){
    console.log("fetching data from server...")
    const res = await axios.get('https://xebia-scart.herokuapp.com/products');
    setproductData(res.data);
    const data = await axios.get('https://xebia-scart.herokuapp.com/filters');
    setfilterData(data.data);
  }
    const HomeDiv=styled.div`
    margin:0px;
    width:100%;
    height:fit-content;
    min-height:100vh;
    
    
    `
    const ContainerDiv=styled.div`
    display:flex;
    width:100%;
    height:fit-content;
    padding-top:15vh;
    
    
    
    `
  return (
    <HomeDiv>
      <Header setproductData={setproductData}></Header>
      <ContainerDiv>
      <LeftSection filterData={filterData}/>
      <RightSection productData={productData}/>

      </ContainerDiv>
    
    
    </HomeDiv>
  )
}

export default Home