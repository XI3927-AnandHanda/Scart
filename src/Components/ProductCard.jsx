import React from 'react'
import styled from 'styled-components'
const ProductDiv = styled.div`
height:fit-content;
width:250px;
padding:15px;
cursor:pointer;
&:hover {
  box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-webkit-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-moz-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
}
`
const ProductDes = styled.div`
display:flex;
justify-content: space-between;
padding:9px;
`

const AddBtn = styled.button`
cursor:pointer;
color:white; 
background-color:purple;
border:none;

height:30px;
width:60px;
border-radius:10px;
&:hover {
  color:purple; 
  border:2px solid;
  font-weight: bolder;
  background-color:white;
  
}
`
const ImgDiv = styled.div`
height:200px;
width:100%;
border-radius:17px;
display:flex;
align-items:center;
justify-content: center;
overflow:hidden;
box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-webkit-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-moz-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);

`


const ProductImg = styled.img`
width:95%;
height:auto;



`
const ColorDiv = styled.div`
height:20px;
width:20px;
border-radius:10px; 
display:block;
margin:auto;
margin-top:4px;


`
function ProductCard(props) {
  return (
    <ProductDiv>

      <ImgDiv><ProductImg src={props.data.image} /></ImgDiv>

      <ProductDes>

        <div style={{flex:7}}><b>{props.data.title}</b></div>
        <div style={{flex:2,padding:"1px"}}>
          {props.data.colour.title} <ColorDiv style={{ backgroundColor: props.data.colour.color }} />
        </div>
      </ProductDes>
      <ProductDes>

        <div>{props.data.brand}</div>
        <AddBtn>+ Add</AddBtn>
      </ProductDes>
      <ProductDes><div>{props.data.discount}%</div>
        <div>Rs. {props.data.price.final_price}/-</div>
      </ProductDes>

    </ProductDiv>
  )
}

export default ProductCard