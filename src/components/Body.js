import React from 'react'
import SearchBox from './SearchBox';

const Body = () => {
  return (
    <div style={{display :'flex', flexDirection:"row",alignItems:"center" ,justifyContent:"space-evenly"}}>
        <div  >Weather in your city</div>
    <SearchBox/>
    </div>
  )
}

export default Body