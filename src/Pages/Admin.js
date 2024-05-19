import React from 'react'
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';


const Admin = () => {
  return (
    <>
      <StyledHeading>Hi, Welcome back 👋</StyledHeading>
      <MainDIv>
        <SubDIv>
          <SubHeading>Categories</SubHeading>
          <TxtHeading>Products</TxtHeading>
        </SubDIv>
        <SubDIv>
          <SubHeading>Items</SubHeading>
          <TxtHeading>Shoe</TxtHeading>
          <TxtHeading>Bag</TxtHeading>
          <TxtHeading>Camera</TxtHeading>
        </SubDIv>
        <SubDIv>
          <TxtHeading>Name</TxtHeading> 
            <InputBox/>
          <TxtHeading>Description </TxtHeading>
            <InputBox/>
          <TxtHeading>Image</TxtHeading>
            <InputBox/>
          <TxtHeading>Qty</TxtHeading>
            <InputBox/>
          <TxtHeading>Rate</TxtHeading>
            <InputBox/>
          
          <AddIcon 
            sx={{
              color: 'blue',
              float: 'right',
              fontSize:'35px',
              margin:'18px',
            }}
          />
        </SubDIv>

      </MainDIv>

    </>
  )
}

export default Admin

const MainDIv = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const SubDIv = styled.div`
  width: 100%;

`

const TxtHeading = styled.p`
  font-size : 17px;
  margin : 4px ;
  padding :4px;
  &&:hover {
    background-color :red;
  }
`
const SubHeading = styled.p`
  color : blue;
  font-size : 19px;
  font-weight : bold;
  margin : 10px;
`

const StyledHeading = styled.p`
  color : blue;
  font-size : 20px;
  font-weight : bold;
  text-align : center;
  margin : 10px;
`
const InputBox = styled.input`

`