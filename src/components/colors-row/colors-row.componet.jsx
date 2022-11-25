import React from 'react'
import './color-row.css'

const ColorRow = (props) => {
    return (
        <div className="choices-wrapper">
            <div className='color-row'>
                {
                    props.colors.map((color, idx) =>
                        <button
                            style={{ backgroundColor: color }} key={color + idx}
                            onClick={() => props.handelClick(color)}
                        ></button>)
                }
            </div>
        </div>
    )

}

export default ColorRow
