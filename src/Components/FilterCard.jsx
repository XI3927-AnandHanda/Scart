import React, { useState } from 'react'
import styled from 'styled-components'

const FilterDiv = styled.div`
height:fit-content;
width:95%;
display:flex;
flex-wrap:wrap;
padding:15px;
justify-content:flex-start;

`
const ColorDiv = styled.div`
display:inline-block;
height:13px;
width:13px;
border-radius:10px;
`
const FilterItem = styled.div`
padding:20px 10px;
text-align:left;
height:fit-content;
width:fit-content;
`
const FilterTypeDiv = styled.div`
cursor:pointer;
box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-webkit-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-moz-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
padding:10px 20px;
`
const FilterSelect = styled.select`
cursor:pointer;
font-weight: bolder;
border:none;
font-size:13px;
box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-webkit-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
-moz-box-shadow: 2px -1px 21px -3px rgba(0,0,0,0.38);
padding:10px 20px;

`

const SelectDiv = styled.div`
display:flex;
justify-content:space-around;
padding:10px;
`
function FilterCard({ data }) {
    const [Selected, setSelected] = useState(false)
    return (
        <FilterTypeDiv>
            <FilterTypeDiv>
                <h3 onClick={() => setSelected(!Selected)}>{data.type}</h3>
            </FilterTypeDiv>

            {Selected && data.type !== "PRICE" &&
                <FilterDiv>
                    {

                        data.values.map((val) => {

                            let name = val.title || val.type || val.key;
                            let value = val.value || val.color || val.displayValue;
                            return (
                                <FilterItem>
                                    <input type="checkbox" name={name} value={name} />
                                    <label>{name} <ColorDiv style={{ backgroundColor: value }}></ColorDiv></label>

                                </FilterItem>
                            );

                        })
                    }
                </FilterDiv>
            }



            {Selected && data.type === "PRICE" &&
            
                <SelectDiv>
                <div>
                        <FilterSelect>
                            {

                                data.values.map((val) => {
                                    let name = val.key;
                                    let value = val.displayValue;

                                    return (
                                        <option value={value}>{name}</option>
                                    );
                                })
                            }
                        </FilterSelect>
                    </div>



                    <div >
                        <FilterSelect>              {

                            [...data.values].reverse().map((val) => {
                                let name = val.key;
                                let value = val.displayValue;

                                return (
                                    <option value={value}>
                                        {name}

                                    </option>
                                );
                            })
                        }
                        </FilterSelect>
                    </div>
                    </SelectDiv>


                
            }


                </FilterTypeDiv>

    )
}

            export default FilterCard