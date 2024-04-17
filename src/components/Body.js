import React from 'react'
import SearchBox from './SearchBox';

const Body = () => {
  return (
    <div style={{display :'flex', flexDirection:"row",alignItems:"center" ,gap:"60px",justifyContent:"center"}}>
        <div style={{color:"orange", fontFamily:"sans-serif" ,fontSize:"24px"}} >Weather in your city</div>
    <SearchBox/>
    </div>
  )
}

export default Body