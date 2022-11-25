import './list.css'
import React from 'react'
import Row from '../row/row.component'

const List = (props) => {
  return (
    <div className='list'>
      {props.answersList.map ((answer , index) => <Row key = {index} ans = {answer} clear = {false} />)}
    </div>
  )
}

export default List