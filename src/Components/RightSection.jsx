import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const MainDiv=styled.div`
flex:7;
display:flex;
height:fit-content;
width:100%;
justify-content: space-between;
flex-wrap:wrap;
padding:30px;
`

function RightSection(props) {
  console.log(props.productData);
  return (
    <MainDiv>

        {
          

          props.productData.map((val)=>{
            return(
            <ProductCard key={val.id} data={val}/>
            );

            
          })
        }
        
    </MainDiv>
  )
}

export default RightSection