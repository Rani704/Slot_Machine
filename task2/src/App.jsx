import React, { useState } from "react";

const App =() =>{
   
   const state =useState();
   const [count ,setCount] =useState(0);
   
   
   const IncNum = () =>{
      setCount(count+1);
      // console.log('clicked' + count++);
   };

return(
   <>
   
   <div className="button_click">
      <h1>{count}</h1>
      <button onClick={IncNum}>CLICK ME</button>
   </div>
  
</>
);
  

};
export default App;
