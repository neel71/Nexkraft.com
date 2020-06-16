import React, {Component, useContext} from "react"
import {GlobalStateContext} from "../provider/provider"
import { GlobalDispatchContext } from "../provider/provider"
import rightStyle from "./pricing_right.module.scss"

const Right = () => {
   const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext); 

  return (
    <div style={{paddingTop:'25px',position:'relative',backgroundColor:'white',marginBottom:'60px',
            paddingLeft:'12px',paddingRight:'12px',borderRadius:'10px',border:'.1px solid #86597A',height:'500px',
            boxShadow: '5px 10px 8px #86597A'}}>
      <h4 style={{textAlign:'left',paddingLeft:'20px',paddingBottom:'12px',
              borderBottom:'.1px solid #86597A'}}>{state.title}</h4>
       <p style={{textAlign:'justify'}}>{state.data}</p>
    </div>
  )
}
export default Right