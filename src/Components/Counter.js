import React, { useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
        
        
const Counter = () => {

   const[state,setState]=useState({
     count:0
   });
   
   const incr=()=>{
    setState({
        ...state,
        count:state.count+1
    })
   };
   const decr=()=>{
    setState({
        ...state,
        count:state.count-1 >=0? state.count-1:0
        
    })
   };
    console.log(state.count);

  return (
     <>
     <div className='grid'>
        <div className='col-5'>
        <Card className='m-8 shadow-5'>
        <h3 className='text-4xl'>{state.count}</h3>
        <Button onClick={incr} label={'Increment'} className='p-button-success mr-2'/>
        <Button onClick={decr} label={'Decrement'} className='p-button-warning '/>
        </Card>
        </div>
     </div>
     </>
  )
};

export default Counter
