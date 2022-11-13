import React from 'react'
import './color-row.css' 

const ColorRow = (props) => {
    console.log('initial' , props.ans);
    const ans = props.ans || [] ;
    // const handelClick (clolor)
    if (props.hidden) {
        return (
            <div className='color-row'>
                {ans.length >= 1 
                ? <button className= 'hidden' style={{backgroundColor : ans [0]}}></button>
                : <button className= 'hidden' style={{backgroundColor : '#999'}}></button>
                }
                {ans.length >= 2 
                ? <button className= 'hidden' style={{backgroundColor : ans [1]}}></button>
                : <button className= 'hidden' style={{backgroundColor : '#999'}}></button>
                }
                {ans.length >= 3 
                ? <button className= 'hidden' style={{backgroundColor : ans [2]}}></button>
                : <button className= 'hidden' style={{backgroundColor : '#999'}}></button>
                }
            </div>
          )
    }
    else {
        return (
    <div className='color-row'>
        {   
            props.colors.map ((color , idx) => 
            <button 
                style={{backgroundColor : color}} key=  {color + idx}
                onClick = {() => {
                    const newAns = [...ans , color] ;
                    props.handelClick (newAns)}} 
            ></button>)
        }
    </div>
  )
    }
  
}

export default ColorRow
