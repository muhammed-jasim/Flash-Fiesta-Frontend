import React from 'react'
import Layout from '../Layout'

function Signup() {
  return (
    <>
    <div style= {{display: 'flex' ,flexDirection:'column', justifyContent:'center' , alignItems:'center', height:'80vh'}} >
        <h1>Signup Page</h1>    
      <div style={{padding:"10px"}}>
        <label for="" style={{padding:"10px"}} >Username</label>
        <input type="text" />
      </div>
      <div style={{padding:"10px"}}>
        <label for="" style={{padding:"10px"}} >Password</label>
        <input type="password" />   
      </div>


      <button style={{padding:"5px"}}>Submit</button>
    </div>

    <Layout />
    </>
  )
}

export default Signup
