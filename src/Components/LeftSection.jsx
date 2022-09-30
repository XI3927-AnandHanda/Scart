import React from 'react'
import styled from 'styled-components'
import FilterCard from './FilterCard'

const MainDiv=styled.div`
flex:3;

flex-direction: column;
padding:10px;

`
const FilterHead= styled.div`

border:1px solid;
width:100%;
margin:12px 0px;
height:fit-content;
background-color:purple;
color:white;
padding:3px;
border-radius:10px;
`
function LeftSection(props) {
  return (
    <MainDiv>
      <FilterHead>
        Filters
      </FilterHead>
      {

        props.filterData.map((data)=>{
          return(
      <FilterCard data={data}/>
          );
        })
      }
      

    </MainDiv>
  )
}

export default LeftSection