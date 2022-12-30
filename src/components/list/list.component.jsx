import './list.css'
import React from 'react'
import Row from '../row/row.component'

const List = (props) => {
  return (
    <div className='list'>
      {props.answersList.map ((currentAnswer , index) => 
        <Row key = {index} ans = {currentAnswer.answer} clear = {false} stats = {currentAnswer.stats}/> )}
    </div>
  )
}

export default List